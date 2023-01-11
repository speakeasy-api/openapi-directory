package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeEntitiesResponse
 * The entity analysis response message.
**/
public class AnalyzeEntitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public Entity[] entities;
    public AnalyzeEntitiesResponse withEntities(Entity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public AnalyzeEntitiesResponse withLanguage(String language) {
        this.language = language;
        return this;
    }
}