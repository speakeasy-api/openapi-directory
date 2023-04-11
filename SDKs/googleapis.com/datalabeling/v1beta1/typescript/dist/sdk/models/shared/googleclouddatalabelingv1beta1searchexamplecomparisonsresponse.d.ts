import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ExampleComparison } from "./googleclouddatalabelingv1beta1examplecomparison";
/**
 * Results of searching example comparisons.
 */
export declare class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse extends SpeakeasyBase {
    /**
     * A list of example comparisons matching the search criteria.
     */
    exampleComparisons?: GoogleCloudDatalabelingV1beta1ExampleComparison[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string;
}
