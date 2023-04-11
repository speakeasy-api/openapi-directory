import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ExperimentInfo } from "./googlecloudretailv2experimentinfo";
import { GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2searchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2SearchResponseFacet } from "./googlecloudretailv2searchresponsefacet";
import { GoogleCloudRetailV2SearchResponseQueryExpansionInfo } from "./googlecloudretailv2searchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2SearchResponseSearchResult } from "./googlecloudretailv2searchresponsesearchresult";
/**
 * Response message for SearchService.Search method.
 */
export declare class GoogleCloudRetailV2SearchResponse extends SpeakeasyBase {
    /**
     * The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).
     */
    appliedControls?: string[];
    /**
     * A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.
     */
    attributionToken?: string;
    /**
     * Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search.
     */
    correctedQuery?: string;
    /**
     * Metadata related to A/B testing Experiment associated with this response. Only exists when an experiment is triggered.
     */
    experimentInfo?: GoogleCloudRetailV2ExperimentInfo[];
    /**
     * Results of facets requested by user.
     */
    facets?: GoogleCloudRetailV2SearchResponseFacet[];
    /**
     * The invalid SearchRequest.BoostSpec.condition_boost_specs that are not applied during serving.
     */
    invalidConditionBoostSpecs?: GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec[];
    /**
     * A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Information describing query expansion including whether expansion has occurred.
     */
    queryExpansionInfo?: GoogleCloudRetailV2SearchResponseQueryExpansionInfo;
    /**
     * The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response.
     */
    redirectUri?: string;
    /**
     * A list of matched items. The order represents the ranking.
     */
    results?: GoogleCloudRetailV2SearchResponseSearchResult[];
    /**
     * The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches.
     */
    totalSize?: number;
}
