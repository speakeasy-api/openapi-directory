package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DistrictRanking
 * Rank of a team in a district.
**/
public class DistrictRanking {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_points")
    public DistrictRankingEventPoints[] eventPoints;
    public DistrictRanking withEventPoints(DistrictRankingEventPoints[] eventPoints) {
        this.eventPoints = eventPoints;
        return this;
    }
    @JsonProperty("point_total")
    public Long pointTotal;
    public DistrictRanking withPointTotal(Long pointTotal) {
        this.pointTotal = pointTotal;
        return this;
    }
    @JsonProperty("rank")
    public Long rank;
    public DistrictRanking withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rookie_bonus")
    public Long rookieBonus;
    public DistrictRanking withRookieBonus(Long rookieBonus) {
        this.rookieBonus = rookieBonus;
        return this;
    }
    @JsonProperty("team_key")
    public String teamKey;
    public DistrictRanking withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}