package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamEventStatusRankRanking {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dq")
    public Long dq;
    public TeamEventStatusRankRanking withDq(Long dq) {
        this.dq = dq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matches_played")
    public Long matchesPlayed;
    public TeamEventStatusRankRanking withMatchesPlayed(Long matchesPlayed) {
        this.matchesPlayed = matchesPlayed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qual_average")
    public Double qualAverage;
    public TeamEventStatusRankRanking withQualAverage(Double qualAverage) {
        this.qualAverage = qualAverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public TeamEventStatusRankRanking withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record")
    public WltRecord record;
    public TeamEventStatusRankRanking withRecord(WltRecord record) {
        this.record = record;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort_orders")
    public Double[] sortOrders;
    public TeamEventStatusRankRanking withSortOrders(Double[] sortOrders) {
        this.sortOrders = sortOrders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_key")
    public String teamKey;
    public TeamEventStatusRankRanking withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}