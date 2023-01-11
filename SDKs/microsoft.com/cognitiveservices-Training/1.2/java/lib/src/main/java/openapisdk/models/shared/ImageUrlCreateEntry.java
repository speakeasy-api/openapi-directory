package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageUrlCreateEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagIds")
    public String[] tagIds;
    public ImageUrlCreateEntry withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public ImageUrlCreateEntry withUrl(String url) {
        this.url = url;
        return this;
    }
}