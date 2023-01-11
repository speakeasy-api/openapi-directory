package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageTagCreateEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageId")
    public String imageId;
    public ImageTagCreateEntry withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagId")
    public String tagId;
    public ImageTagCreateEntry withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}