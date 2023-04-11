import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUserBindingServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class ListUserBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUserBindingRequest extends SpeakeasyBase {
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
    serviceSid: string;
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
    bindings?: shared.IpMessagingV2ServiceUserUserBinding[];
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
