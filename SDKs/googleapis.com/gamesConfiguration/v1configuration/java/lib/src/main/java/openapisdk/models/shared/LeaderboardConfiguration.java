package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LeaderboardConfiguration
 * An leaderboard configuration resource.
**/
public class LeaderboardConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draft")
    public LeaderboardConfigurationDetail draft;
    public LeaderboardConfiguration withDraft(LeaderboardConfigurationDetail draft) {
        this.draft = draft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LeaderboardConfiguration withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LeaderboardConfiguration withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published")
    public LeaderboardConfigurationDetail published;
    public LeaderboardConfiguration withPublished(LeaderboardConfigurationDetail published) {
        this.published = published;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreMax")
    public String scoreMax;
    public LeaderboardConfiguration withScoreMax(String scoreMax) {
        this.scoreMax = scoreMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreMin")
    public String scoreMin;
    public LeaderboardConfiguration withScoreMin(String scoreMin) {
        this.scoreMin = scoreMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreOrder")
    public LeaderboardConfigurationScoreOrderEnum scoreOrder;
    public LeaderboardConfiguration withScoreOrder(LeaderboardConfigurationScoreOrderEnum scoreOrder) {
        this.scoreOrder = scoreOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public LeaderboardConfiguration withToken(String token) {
        this.token = token;
        return this;
    }
}