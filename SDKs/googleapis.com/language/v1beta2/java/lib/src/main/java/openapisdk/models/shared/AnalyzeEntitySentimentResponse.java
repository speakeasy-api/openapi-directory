package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeEntitySentimentResponse
 * The entity-level sentiment analysis response message.
**/
public class AnalyzeEntitySentimentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public Entity[] entities;
    public AnalyzeEntitySentimentResponse withEntities(Entity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public AnalyzeEntitySentimentResponse withLanguage(String language) {
        this.language = language;
        return this;
    }
}