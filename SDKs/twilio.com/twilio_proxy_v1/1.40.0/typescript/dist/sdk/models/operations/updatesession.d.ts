import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class UpdateSessionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSessionUpdateSessionRequest extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value.
     */
    dateExpiry?: Date;
    status?: shared.SessionEnumStatusEnum;
    /**
     * The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session's last Interaction.
     */
    ttl?: number;
}
export declare class UpdateSessionRequest extends SpeakeasyBase {
    requestBody?: UpdateSessionUpdateSessionRequest;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to update.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Session resource to update.
     */
    sid: string;
}
export declare class UpdateSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1ServiceSession?: shared.ProxyV1ServiceSession;
}
