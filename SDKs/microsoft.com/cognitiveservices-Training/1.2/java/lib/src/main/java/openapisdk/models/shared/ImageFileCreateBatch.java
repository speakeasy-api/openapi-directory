package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageFileCreateBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Images")
    public ImageFileCreateEntry[] images;
    public ImageFileCreateBatch withImages(ImageFileCreateEntry[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagIds")
    public String[] tagIds;
    public ImageFileCreateBatch withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
}