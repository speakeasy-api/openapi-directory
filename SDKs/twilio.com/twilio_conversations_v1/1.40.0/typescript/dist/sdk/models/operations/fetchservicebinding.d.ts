import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchServiceBindingServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchServiceBindingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Binding resource is associated with.
     */
    chatServiceSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class FetchServiceBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceBinding?: shared.ConversationsV1ServiceServiceBinding;
}
