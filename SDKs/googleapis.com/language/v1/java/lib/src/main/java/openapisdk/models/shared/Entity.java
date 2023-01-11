package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Entity
 * Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
**/
public class Entity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mentions")
    public EntityMention[] mentions;
    public Entity withMentions(EntityMention[] mentions) {
        this.mentions = mentions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public Entity withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Entity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salience")
    public Float salience;
    public Entity withSalience(Float salience) {
        this.salience = salience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentiment")
    public Sentiment sentiment;
    public Entity withSentiment(Sentiment sentiment) {
        this.sentiment = sentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EntityTypeEnum type;
    public Entity withType(EntityTypeEnum type) {
        this.type = type;
        return this;
    }
}