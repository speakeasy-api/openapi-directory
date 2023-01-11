package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerScore
 * A player score.
**/
public class PlayerScore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedScore")
    public String formattedScore;
    public PlayerScore withFormattedScore(String formattedScore) {
        this.formattedScore = formattedScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerScore withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public String score;
    public PlayerScore withScore(String score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreTag")
    public String scoreTag;
    public PlayerScore withScoreTag(String scoreTag) {
        this.scoreTag = scoreTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSpan")
    public PlayerScoreTimeSpanEnum timeSpan;
    public PlayerScore withTimeSpan(PlayerScoreTimeSpanEnum timeSpan) {
        this.timeSpan = timeSpan;
        return this;
    }
}