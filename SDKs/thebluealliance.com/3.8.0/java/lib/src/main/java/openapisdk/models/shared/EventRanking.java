package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventRanking {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra_stats_info")
    public EventRankingExtraStatsInfo[] extraStatsInfo;
    public EventRanking withExtraStatsInfo(EventRankingExtraStatsInfo[] extraStatsInfo) {
        this.extraStatsInfo = extraStatsInfo;
        return this;
    }
    @JsonProperty("rankings")
    public EventRankingRankings[] rankings;
    public EventRanking withRankings(EventRankingRankings[] rankings) {
        this.rankings = rankings;
        return this;
    }
    @JsonProperty("sort_order_info")
    public EventRankingSortOrderInfo[] sortOrderInfo;
    public EventRanking withSortOrderInfo(EventRankingSortOrderInfo[] sortOrderInfo) {
        this.sortOrderInfo = sortOrderInfo;
        return this;
    }
}