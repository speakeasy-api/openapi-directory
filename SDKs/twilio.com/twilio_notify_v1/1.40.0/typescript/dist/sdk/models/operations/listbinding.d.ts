import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListBindingServerList: readonly ["https://notify.twilio.com"];
export declare class ListBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListBindingRequest extends SpeakeasyBase {
    /**
     * Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.
     */
    endDate?: Date;
    /**
     * The [User](https://www.twilio.com/docs/chat/rest/user-resource)'s `identity` value of the resources to read.
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
     * The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) to read the resource from.
     */
    serviceSid: string;
    /**
     * Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`.
     */
    startDate?: Date;
    /**
     * Only list Bindings that have all of the specified Tags. The following implicit tags are available: `all`, `apn`, `fcm`, `gcm`, `sms`, `facebook-messenger`. Up to 5 tags are allowed.
     */
    tag?: string[];
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
    bindings?: shared.NotifyV1ServiceBinding[];
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
