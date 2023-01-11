package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1Product
 * A Product contains ReferenceImages.
**/
public class GoogleCloudVisionV1p2beta1Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudVisionV1p2beta1Product withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudVisionV1p2beta1Product withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudVisionV1p2beta1Product withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCategory")
    public String productCategory;
    public GoogleCloudVisionV1p2beta1Product withProductCategory(String productCategory) {
        this.productCategory = productCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productLabels")
    public GoogleCloudVisionV1p2beta1ProductKeyValue[] productLabels;
    public GoogleCloudVisionV1p2beta1Product withProductLabels(GoogleCloudVisionV1p2beta1ProductKeyValue[] productLabels) {
        this.productLabels = productLabels;
        return this;
    }
}