import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1ImportErrorsConfig } from "./googlecloudrecommendationenginev1beta1importerrorsconfig";
import { GoogleCloudRecommendationengineV1beta1InputConfig } from "./googlecloudrecommendationenginev1beta1inputconfig";
/**
 * Request message for Import methods.
 */
export declare class GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest extends SpeakeasyBase {
    /**
     * Configuration of destination for Import related errors.
     */
    errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
    /**
     * The input config source.
     */
    inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig;
    /**
     * Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response.
     */
    requestId?: string;
    /**
     * Optional. Indicates which fields in the provided imported 'items' to update. If not set, will by default update all fields.
     */
    updateMask?: string;
}
