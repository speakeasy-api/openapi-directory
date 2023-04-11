import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class CreateSessionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSessionCreateSessionRequest extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value.
     */
    dateExpiry?: Date;
    mode?: shared.SessionEnumModeEnum;
    /**
     * The Participant objects to include in the new session.
     */
    participants?: any[];
    status?: shared.SessionEnumStatusEnum;
    /**
     * The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session's last Interaction.
     */
    ttl?: number;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. **This value should not have PII.**
     */
    uniqueName?: string;
}
export declare class CreateSessionRequest extends SpeakeasyBase {
    requestBody?: CreateSessionCreateSessionRequest;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     */
    serviceSid: string;
}
export declare class CreateSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    proxyV1ServiceSession?: shared.ProxyV1ServiceSession;
}
