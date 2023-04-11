import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersRequest extends SpeakeasyBase {
    /**
     * The cursor to start returning results from.
     *
     * @remarks
     *
     * You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
     *
     */
    cursor?: string;
    /**
     * Show the most (`desc`) / least (`asc`) recently created entries first
     */
    order?: shared.OrderEnum;
    /**
     * The number of results returned per page.   The default value is `10`. The maximum value is `100`.
     */
    pageSize?: number;
}
export declare class GetUsers200ApplicationJSONEmbeddedData extends SpeakeasyBase {
    /**
     * List of users matching the provided filter
     */
    users?: shared.UserList[];
}
export declare class GetUsers200ApplicationJSONEmbedded extends SpeakeasyBase {
    data?: GetUsers200ApplicationJSONEmbeddedData;
}
export declare class GetUsers200ApplicationJSONLinksFirst extends SpeakeasyBase {
    href?: string;
}
export declare class GetUsers200ApplicationJSONLinksNext extends SpeakeasyBase {
    href?: string;
}
export declare class GetUsers200ApplicationJSONLinksPrev extends SpeakeasyBase {
    href?: string;
}
export declare class GetUsers200ApplicationJSONLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetUsers200ApplicationJSONLinks extends SpeakeasyBase {
    first?: GetUsers200ApplicationJSONLinksFirst;
    next?: GetUsers200ApplicationJSONLinksNext;
    prev?: GetUsers200ApplicationJSONLinksPrev;
    self?: GetUsers200ApplicationJSONLinksSelf;
}
/**
 * OK
 */
export declare class GetUsers200ApplicationJSON extends SpeakeasyBase {
    embedded?: GetUsers200ApplicationJSONEmbedded;
    links?: GetUsers200ApplicationJSONLinks;
    /**
     * Current cursor
     */
    cursor?: string;
    /**
     * The number of results returned on this page
     */
    pageSize?: number;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getUsers200ApplicationJSONObject?: GetUsers200ApplicationJSON;
}
