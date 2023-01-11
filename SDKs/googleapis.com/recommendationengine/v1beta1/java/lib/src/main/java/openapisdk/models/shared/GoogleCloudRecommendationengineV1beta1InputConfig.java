package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1InputConfig
 * The input config source.
**/
public class GoogleCloudRecommendationengineV1beta1InputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigQuerySource")
    public GoogleCloudRecommendationengineV1beta1BigQuerySource bigQuerySource;
    public GoogleCloudRecommendationengineV1beta1InputConfig withBigQuerySource(GoogleCloudRecommendationengineV1beta1BigQuerySource bigQuerySource) {
        this.bigQuerySource = bigQuerySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogInlineSource")
    public GoogleCloudRecommendationengineV1beta1CatalogInlineSource catalogInlineSource;
    public GoogleCloudRecommendationengineV1beta1InputConfig withCatalogInlineSource(GoogleCloudRecommendationengineV1beta1CatalogInlineSource catalogInlineSource) {
        this.catalogInlineSource = catalogInlineSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudRecommendationengineV1beta1GcsSource gcsSource;
    public GoogleCloudRecommendationengineV1beta1InputConfig withGcsSource(GoogleCloudRecommendationengineV1beta1GcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEventInlineSource")
    public GoogleCloudRecommendationengineV1beta1UserEventInlineSource userEventInlineSource;
    public GoogleCloudRecommendationengineV1beta1InputConfig withUserEventInlineSource(GoogleCloudRecommendationengineV1beta1UserEventInlineSource userEventInlineSource) {
        this.userEventInlineSource = userEventInlineSource;
        return this;
    }
}