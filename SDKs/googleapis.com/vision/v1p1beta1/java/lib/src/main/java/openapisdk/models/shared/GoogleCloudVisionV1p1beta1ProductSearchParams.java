package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1ProductSearchParams
 * Parameters for a product search request.
**/
public class GoogleCloudVisionV1p1beta1ProductSearchParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPoly")
    public GoogleCloudVisionV1p1beta1BoundingPoly boundingPoly;
    public GoogleCloudVisionV1p1beta1ProductSearchParams withBoundingPoly(GoogleCloudVisionV1p1beta1BoundingPoly boundingPoly) {
        this.boundingPoly = boundingPoly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudVisionV1p1beta1ProductSearchParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCategories")
    public String[] productCategories;
    public GoogleCloudVisionV1p1beta1ProductSearchParams withProductCategories(String[] productCategories) {
        this.productCategories = productCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productSet")
    public String productSet;
    public GoogleCloudVisionV1p1beta1ProductSearchParams withProductSet(String productSet) {
        this.productSet = productSet;
        return this;
    }
}