package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementUpdateMultipleResponse
 * Response message for UpdateMultipleAchievements rpc.
**/
public class AchievementUpdateMultipleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementUpdateMultipleResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAchievements")
    public AchievementUpdateResponse[] updatedAchievements;
    public AchievementUpdateMultipleResponse withUpdatedAchievements(AchievementUpdateResponse[] updatedAchievements) {
        this.updatedAchievements = updatedAchievements;
        return this;
    }
}