import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUserBindingServerList: readonly ["https://chat.twilio.com"];
export declare class ListUserBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUserBindingRequest extends SpeakeasyBase {
    /**
     * The push technology used by the User Binding resources to read. Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
     */
    bindingType?: shared.UserBindingEnumBindingTypeEnum[];
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
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the User Binding resources from.
     */
    serviceSid: string;
    /**
     * The SID of the [User](https://www.twilio.com/docs/chat/rest/user-resource) with the User Binding resources to read.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
     */
    userSid: string;
}
export declare class ListUserBindingListUserBindingResponseMeta extends SpeakeasyBase {
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
export declare class ListUserBindingListUserBindingResponse extends SpeakeasyBase {
    bindings?: shared.ChatV2ServiceUserUserBinding[];
    meta?: ListUserBindingListUserBindingResponseMeta;
}
export declare class ListUserBindingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUserBindingResponse?: ListUserBindingListUserBindingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
