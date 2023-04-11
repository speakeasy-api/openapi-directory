import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteShortCodeServerList: readonly ["https://proxy.twilio.com"];
export declare class DeleteShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteShortCodeRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource to delete the ShortCode resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the ShortCode resource to delete.
     */
    sid: string;
}
export declare class DeleteShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
