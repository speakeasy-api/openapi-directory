import { SpeakeasyBase } from "../../../internal/utils";
import { Chain } from "./chain";
/**
 * Response message for Locations.SearchChains.
 */
export declare class SearchChainsResponse extends SpeakeasyBase {
    /**
     * Chains that match the queried chain_display_name in SearchChainsRequest. If there are no matches, this field will be empty. Results are listed in order of relevance.
     */
    chains?: Chain[];
}
