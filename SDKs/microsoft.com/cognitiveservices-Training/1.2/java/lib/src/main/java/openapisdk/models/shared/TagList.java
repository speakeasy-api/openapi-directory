package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public TagList withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalTaggedImages")
    public Integer totalTaggedImages;
    public TagList withTotalTaggedImages(Integer totalTaggedImages) {
        this.totalTaggedImages = totalTaggedImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalUntaggedImages")
    public Integer totalUntaggedImages;
    public TagList withTotalUntaggedImages(Integer totalUntaggedImages) {
        this.totalUntaggedImages = totalUntaggedImages;
        return this;
    }
}