import { SpeakeasyBase } from "../../../internal/utils";
import { DnsPeering } from "./dnspeering";
/**
 * Response message for list DNS peerings.
 */
export declare class ListDnsPeeringsResponse extends SpeakeasyBase {
    /**
     * List of dns peering.
     */
    dnsPeerings?: DnsPeering[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
