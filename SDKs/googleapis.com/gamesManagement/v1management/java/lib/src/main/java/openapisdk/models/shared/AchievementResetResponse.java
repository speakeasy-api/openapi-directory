package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementResetResponse
 * An achievement reset response.
**/
public class AchievementResetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentState")
    public String currentState;
    public AchievementResetResponse withCurrentState(String currentState) {
        this.currentState = currentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definitionId")
    public String definitionId;
    public AchievementResetResponse withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementResetResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateOccurred")
    public Boolean updateOccurred;
    public AchievementResetResponse withUpdateOccurred(Boolean updateOccurred) {
        this.updateOccurred = updateOccurred;
        return this;
    }
}