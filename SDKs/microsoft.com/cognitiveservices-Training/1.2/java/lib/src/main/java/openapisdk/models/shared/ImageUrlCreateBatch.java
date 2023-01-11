package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageUrlCreateBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Images")
    public ImageUrlCreateEntry[] images;
    public ImageUrlCreateBatch withImages(ImageUrlCreateEntry[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagIds")
    public String[] tagIds;
    public ImageUrlCreateBatch withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
}