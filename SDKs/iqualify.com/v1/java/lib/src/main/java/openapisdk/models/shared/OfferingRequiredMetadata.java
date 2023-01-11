package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OfferingRequiredMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public OfferingRequiredMetadata withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public String level;
    public OfferingRequiredMetadata withLevel(String level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public OfferingRequiredMetadata withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public OfferingRequiredMetadata withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}