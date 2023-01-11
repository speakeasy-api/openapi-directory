package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageTagCreateBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public ImageTagCreateEntry[] tags;
    public ImageTagCreateBatch withTags(ImageTagCreateEntry[] tags) {
        this.tags = tags;
        return this;
    }
}