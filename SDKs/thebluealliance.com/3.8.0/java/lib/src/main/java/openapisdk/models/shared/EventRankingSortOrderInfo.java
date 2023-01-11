package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EventRankingSortOrderInfo {
    @JsonProperty("name")
    public String name;
    public EventRankingSortOrderInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("precision")
    public Long precision;
    public EventRankingSortOrderInfo withPrecision(Long precision) {
        this.precision = precision;
        return this;
    }
}