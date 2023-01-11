package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LeaderboardConfigurationDetail
 * A leaderboard configuration detail.
**/
public class LeaderboardConfigurationDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconUrl")
    public String iconUrl;
    public LeaderboardConfigurationDetail withIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LeaderboardConfigurationDetail withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public LocalizedStringBundle name;
    public LeaderboardConfigurationDetail withName(LocalizedStringBundle name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreFormat")
    public GamesNumberFormatConfiguration scoreFormat;
    public LeaderboardConfigurationDetail withScoreFormat(GamesNumberFormatConfiguration scoreFormat) {
        this.scoreFormat = scoreFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortRank")
    public Integer sortRank;
    public LeaderboardConfigurationDetail withSortRank(Integer sortRank) {
        this.sortRank = sortRank;
        return this;
    }
}