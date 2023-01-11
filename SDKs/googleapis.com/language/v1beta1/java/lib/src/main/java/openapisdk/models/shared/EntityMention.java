package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityMention
 * Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
**/
public class EntityMention {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public TextSpan text;
    public EntityMention withText(TextSpan text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EntityMentionTypeEnum type;
    public EntityMention withType(EntityMentionTypeEnum type) {
        this.type = type;
        return this;
    }
}