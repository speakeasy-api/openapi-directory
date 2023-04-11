import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateShortCodeServerList: readonly ["https://proxy.twilio.com"];
export declare class UpdateShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateShortCodeUpdateShortCodeRequest extends SpeakeasyBase {
    /**
     * Whether the short code should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
     */
    isReserved?: boolean;
}
export declare class UpdateShortCodeRequest extends SpeakeasyBase {
    requestBody?: UpdateShortCodeUpdateShortCodeRequest;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to update.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the ShortCode resource to update.
     */
    sid: string;
}
export declare class UpdateShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
