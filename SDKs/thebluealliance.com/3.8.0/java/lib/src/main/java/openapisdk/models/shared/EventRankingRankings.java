package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventRankingRankings {
    @JsonProperty("dq")
    public Long dq;
    public EventRankingRankings withDq(Long dq) {
        this.dq = dq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra_stats")
    public Double[] extraStats;
    public EventRankingRankings withExtraStats(Double[] extraStats) {
        this.extraStats = extraStats;
        return this;
    }
    @JsonProperty("matches_played")
    public Long matchesPlayed;
    public EventRankingRankings withMatchesPlayed(Long matchesPlayed) {
        this.matchesPlayed = matchesPlayed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qual_average")
    public Long qualAverage;
    public EventRankingRankings withQualAverage(Long qualAverage) {
        this.qualAverage = qualAverage;
        return this;
    }
    @JsonProperty("rank")
    public Long rank;
    public EventRankingRankings withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonProperty("record")
    public WltRecord record;
    public EventRankingRankings withRecord(WltRecord record) {
        this.record = record;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort_orders")
    public Double[] sortOrders;
    public EventRankingRankings withSortOrders(Double[] sortOrders) {
        this.sortOrders = sortOrders;
        return this;
    }
    @JsonProperty("team_key")
    public String teamKey;
    public EventRankingRankings withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}