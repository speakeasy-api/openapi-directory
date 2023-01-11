package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AchievementResetMultipleForAllRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("achievement_ids")
    public String[] achievementIds;
    public AchievementResetMultipleForAllRequest withAchievementIds(String[] achievementIds) {
        this.achievementIds = achievementIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementResetMultipleForAllRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
}