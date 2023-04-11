import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteShortCodeServerList: readonly ["https://messaging.twilio.com"];
export declare class DeleteShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteShortCodeRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the resource from.
     */
    serviceSid: string;
    /**
     * The SID of the ShortCode resource to delete.
     */
    sid: string;
}
export declare class DeleteShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
