import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaPredictResponsePredictionResult } from "./googlecloudretailv2betapredictresponsepredictionresult";
/**
 * Response message for predict method.
 */
export declare class GoogleCloudRetailV2betaPredictResponse extends SpeakeasyBase {
    /**
     * A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.
     */
    attributionToken?: string;
    /**
     * IDs of products in the request that were missing from the inventory.
     */
    missingIds?: string[];
    /**
     * A list of recommended products. The order represents the ranking (from the most relevant product to the least).
     */
    results?: GoogleCloudRetailV2betaPredictResponsePredictionResult[];
    /**
     * True if the validateOnly property was set in the request.
     */
    validateOnly?: boolean;
}
