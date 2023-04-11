import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteAlphaSenderServerList: readonly ["https://messaging.twilio.com"];
export declare class DeleteAlphaSenderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteAlphaSenderRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the resource from.
     */
    serviceSid: string;
    /**
     * The SID of the AlphaSender resource to delete.
     */
    sid: string;
}
export declare class DeleteAlphaSenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
