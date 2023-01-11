package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EventRankingExtraStatsInfo {
    @JsonProperty("name")
    public String name;
    public EventRankingExtraStatsInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("precision")
    public Double precision;
    public EventRankingExtraStatsInfo withPrecision(Double precision) {
        this.precision = precision;
        return this;
    }
}