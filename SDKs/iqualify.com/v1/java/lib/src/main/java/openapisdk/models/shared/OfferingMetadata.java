package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OfferingMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public OfferingMetadata withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public String level;
    public OfferingMetadata withLevel(String level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootContentId")
    public String rootContentId;
    public OfferingMetadata withRootContentId(String rootContentId) {
        this.rootContentId = rootContentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public OfferingMetadata withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public OfferingMetadata withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}