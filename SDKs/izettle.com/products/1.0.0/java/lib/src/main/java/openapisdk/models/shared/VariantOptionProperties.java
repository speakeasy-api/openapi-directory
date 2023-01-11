package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VariantOptionProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public VariantOptionProperties withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public VariantOptionProperties withValue(String value) {
        this.value = value;
        return this;
    }
}