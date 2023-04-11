import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListBindingServerList: readonly ["https://chat.twilio.com"];
export declare class ListBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListBindingRequest extends SpeakeasyBase {
    /**
     * The push technology used by the Binding resources to read.  Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
     */
    bindingType?: shared.BindingEnumBindingTypeEnum[];
    /**
     * The [User](https://www.twilio.com/docs/chat/rest/user-resource)'s `identity` value of the resources to read. See [access tokens](https://www.twilio.com/docs/chat/create-tokens) for more details.
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
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the Binding resources from.
     */
    serviceSid: string;
}
export declare class ListBindingListBindingResponseMeta extends SpeakeasyBase {
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
export declare class ListBindingListBindingResponse extends SpeakeasyBase {
    bindings?: shared.ChatV2ServiceBinding[];
    meta?: ListBindingListBindingResponseMeta;
}
export declare class ListBindingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listBindingResponse?: ListBindingListBindingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
