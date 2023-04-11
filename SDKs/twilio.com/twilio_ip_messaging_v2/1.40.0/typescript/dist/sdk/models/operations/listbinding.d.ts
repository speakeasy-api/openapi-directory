import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListBindingServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class ListBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListBindingRequest extends SpeakeasyBase {
    bindingType?: shared.BindingEnumBindingTypeEnum[];
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
    bindings?: shared.IpMessagingV2ServiceBinding[];
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
