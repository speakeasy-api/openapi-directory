import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult } from "./googlecloudvisionv1p2beta1productsearchresultsgroupedresult";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsResult } from "./googlecloudvisionv1p2beta1productsearchresultsresult";
/**
 * Results for a product search request.
 */
export declare class GoogleCloudVisionV1p2beta1ProductSearchResults extends SpeakeasyBase {
    /**
     * Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
     */
    indexTime?: string;
    /**
     * List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
     */
    productGroupedResults?: GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult[];
    /**
     * List of results, one for each product match.
     */
    results?: GoogleCloudVisionV1p2beta1ProductSearchResultsResult[];
}
