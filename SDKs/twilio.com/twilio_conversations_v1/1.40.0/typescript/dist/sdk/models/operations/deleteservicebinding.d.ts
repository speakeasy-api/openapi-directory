import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteServiceBindingServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteServiceBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteServiceBindingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to delete the Binding resource from.
     */
    chatServiceSid: string;
    /**
     * The SID of the Binding resource to delete.
     */
    sid: string;
}
export declare class DeleteServiceBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
