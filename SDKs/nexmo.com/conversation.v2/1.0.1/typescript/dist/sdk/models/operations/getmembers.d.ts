import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMembersRequest extends SpeakeasyBase {
    /**
     * The ID of the conversation
     */
    conversationId: string;
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
export declare class GetMembers200ApplicationJSONEmbeddedData extends SpeakeasyBase {
    /**
     * List of members matching the provided filter
     */
    members?: shared.MemberList[];
}
export declare class GetMembers200ApplicationJSONEmbedded extends SpeakeasyBase {
    data?: GetMembers200ApplicationJSONEmbeddedData;
}
export declare class GetMembers200ApplicationJSONLinksFirst extends SpeakeasyBase {
    href?: string;
}
export declare class GetMembers200ApplicationJSONLinksNext extends SpeakeasyBase {
    href?: string;
}
export declare class GetMembers200ApplicationJSONLinksPrev extends SpeakeasyBase {
    href?: string;
}
export declare class GetMembers200ApplicationJSONLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetMembers200ApplicationJSONLinks extends SpeakeasyBase {
    first?: GetMembers200ApplicationJSONLinksFirst;
    next?: GetMembers200ApplicationJSONLinksNext;
    prev?: GetMembers200ApplicationJSONLinksPrev;
    self?: GetMembers200ApplicationJSONLinksSelf;
}
/**
 * OK
 */
export declare class GetMembers200ApplicationJSON extends SpeakeasyBase {
    embedded?: GetMembers200ApplicationJSONEmbedded;
    links?: GetMembers200ApplicationJSONLinks;
    /**
     * The number of results returned on this page
     */
    pageSize?: number;
}
export declare class GetMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getMembers200ApplicationJSONObject?: GetMembers200ApplicationJSON;
}
