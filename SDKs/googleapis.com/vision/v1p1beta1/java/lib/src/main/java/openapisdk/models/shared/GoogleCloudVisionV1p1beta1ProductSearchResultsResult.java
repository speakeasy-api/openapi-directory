package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1ProductSearchResultsResult
 * Information about a product.
**/
public class GoogleCloudVisionV1p1beta1ProductSearchResultsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public GoogleCloudVisionV1p1beta1ProductSearchResultsResult withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public GoogleCloudVisionV1p1beta1Product product;
    public GoogleCloudVisionV1p1beta1ProductSearchResultsResult withProduct(GoogleCloudVisionV1p1beta1Product product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudVisionV1p1beta1ProductSearchResultsResult withScore(Float score) {
        this.score = score;
        return this;
    }
}