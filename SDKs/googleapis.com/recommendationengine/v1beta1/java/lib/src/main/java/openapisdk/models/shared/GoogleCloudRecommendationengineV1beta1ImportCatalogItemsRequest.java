package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest
 * Request message for Import methods.
**/
public class GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorsConfig")
    public GoogleCloudRecommendationengineV1beta1ImportErrorsConfig errorsConfig;
    public GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest withErrorsConfig(GoogleCloudRecommendationengineV1beta1ImportErrorsConfig errorsConfig) {
        this.errorsConfig = errorsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GoogleCloudRecommendationengineV1beta1InputConfig inputConfig;
    public GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest withInputConfig(GoogleCloudRecommendationengineV1beta1InputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}