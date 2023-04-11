import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation } from "./googlecloudvisionv1p2beta1productsearchresultsobjectannotation";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsResult } from "./googlecloudvisionv1p2beta1productsearchresultsresult";
/**
 * Information about the products similar to a single product in a query image.
 */
export declare class GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * List of generic predictions for the object in the bounding box.
     */
    objectAnnotations?: GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation[];
    /**
     * List of results, one for each product match.
     */
    results?: GoogleCloudVisionV1p2beta1ProductSearchResultsResult[];
}
