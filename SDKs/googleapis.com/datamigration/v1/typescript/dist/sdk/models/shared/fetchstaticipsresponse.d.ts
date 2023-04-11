import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for a 'FetchStaticIps' request.
 */
export declare class FetchStaticIpsResponse extends SpeakeasyBase {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of static IPs.
     */
    staticIps?: string[];
}
