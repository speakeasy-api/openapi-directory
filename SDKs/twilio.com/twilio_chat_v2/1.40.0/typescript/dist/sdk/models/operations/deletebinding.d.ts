import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteBindingServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteBindingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the Binding resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Binding resource to delete.
     */
    sid: string;
}
export declare class DeleteBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
