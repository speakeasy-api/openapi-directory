package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementResetAllResponse
 * Achievement reset all response.
**/
public class AchievementResetAllResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementResetAllResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public AchievementResetResponse[] results;
    public AchievementResetAllResponse withResults(AchievementResetResponse[] results) {
        this.results = results;
        return this;
    }
}