import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1ImportErrorsConfig } from "./googlecloudrecommendationenginev1beta1importerrorsconfig";
import { GoogleCloudRecommendationengineV1beta1InputConfig } from "./googlecloudrecommendationenginev1beta1inputconfig";
/**
 * Request message for the ImportUserEvents request.
 */
export declare class GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest extends SpeakeasyBase {
    /**
     * Configuration of destination for Import related errors.
     */
    errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
    /**
     * The input config source.
     */
    inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig;
    /**
     * Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency for expensive long running operations. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. Note that this field must not be set if the desired input config is catalog_inline_source.
     */
    requestId?: string;
}
