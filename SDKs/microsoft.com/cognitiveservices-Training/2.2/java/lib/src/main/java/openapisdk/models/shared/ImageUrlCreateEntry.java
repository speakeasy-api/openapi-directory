package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageUrlCreateEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public Region[] regions;
    public ImageUrlCreateEntry withRegions(Region[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagIds")
    public String[] tagIds;
    public ImageUrlCreateEntry withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ImageUrlCreateEntry withUrl(String url) {
        this.url = url;
        return this;
    }
}