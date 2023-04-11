import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information describing query expansion including whether expansion has occurred.
 */
export declare class GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo extends SpeakeasyBase {
    /**
     * Bool describing whether query expansion has occurred.
     */
    expandedQuery?: boolean;
    /**
     * Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true.
     */
    pinnedResultCount?: string;
}
