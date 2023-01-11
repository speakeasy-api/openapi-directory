package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageCreateSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageCreateResult[] images;
    public ImageCreateSummary withImages(ImageCreateResult[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isBatchSuccessful")
    public Boolean isBatchSuccessful;
    public ImageCreateSummary withIsBatchSuccessful(Boolean isBatchSuccessful) {
        this.isBatchSuccessful = isBatchSuccessful;
        return this;
    }
}