package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1PredictRequest
 * Request message for Predict method. Full resource name of the format: `{name=projects/* /locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: // * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` event, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements
**/
public class GoogleCloudRecommendationengineV1beta1PredictRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dryRun")
    public Boolean dryRun;
    public GoogleCloudRecommendationengineV1beta1PredictRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudRecommendationengineV1beta1PredictRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRecommendationengineV1beta1PredictRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleCloudRecommendationengineV1beta1PredictRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GoogleCloudRecommendationengineV1beta1PredictRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public java.util.Map<String, Object> params;
    public GoogleCloudRecommendationengineV1beta1PredictRequest withParams(java.util.Map<String, Object> params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEvent")
    public GoogleCloudRecommendationengineV1beta1UserEvent userEvent;
    public GoogleCloudRecommendationengineV1beta1PredictRequest withUserEvent(GoogleCloudRecommendationengineV1beta1UserEvent userEvent) {
        this.userEvent = userEvent;
        return this;
    }
}