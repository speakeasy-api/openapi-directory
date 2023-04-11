import { SpeakeasyBase } from "../../../internal/utils";
import { TunnelDestGroup } from "./tunneldestgroup";
/**
 * The response from ListTunnelDestGroups.
 */
export declare class ListTunnelDestGroupsResponse extends SpeakeasyBase {
    /**
     * A token that you can send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * TunnelDestGroup existing in the project.
     */
    tunnelDestGroups?: TunnelDestGroup[];
}
