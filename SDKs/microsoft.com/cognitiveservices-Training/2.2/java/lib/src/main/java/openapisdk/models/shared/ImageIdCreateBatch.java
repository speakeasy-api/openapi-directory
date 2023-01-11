package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageIdCreateBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageIdCreateEntry[] images;
    public ImageIdCreateBatch withImages(ImageIdCreateEntry[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagIds")
    public String[] tagIds;
    public ImageIdCreateBatch withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
}