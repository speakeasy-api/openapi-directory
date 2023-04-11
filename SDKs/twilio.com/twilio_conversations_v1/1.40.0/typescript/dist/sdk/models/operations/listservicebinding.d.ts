import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListServiceBindingServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListServiceBindingRequest extends SpeakeasyBase {
    /**
     * The push technology used by the Binding resources to read.  Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
     */
    bindingType?: shared.ServiceBindingEnumBindingTypeEnum[];
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Binding resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The identity of a [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) this binding belongs to. See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more details.
     */
    identity?: string[];
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListServiceBindingListServiceBindingResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListServiceBindingListServiceBindingResponse extends SpeakeasyBase {
    bindings?: shared.ConversationsV1ServiceServiceBinding[];
    meta?: ListServiceBindingListServiceBindingResponseMeta;
}
export declare class ListServiceBindingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listServiceBindingResponse?: ListServiceBindingListServiceBindingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
