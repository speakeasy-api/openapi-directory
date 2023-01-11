package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamEventStatusRank {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_teams")
    public Long numTeams;
    public TeamEventStatusRank withNumTeams(Long numTeams) {
        this.numTeams = numTeams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranking")
    public TeamEventStatusRankRanking ranking;
    public TeamEventStatusRank withRanking(TeamEventStatusRankRanking ranking) {
        this.ranking = ranking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort_order_info")
    public TeamEventStatusRankSortOrderInfo[] sortOrderInfo;
    public TeamEventStatusRank withSortOrderInfo(TeamEventStatusRankSortOrderInfo[] sortOrderInfo) {
        this.sortOrderInfo = sortOrderInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public TeamEventStatusRank withStatus(String status) {
        this.status = status;
        return this;
    }
}