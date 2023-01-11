package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lost")
    public Long lost;
    public GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days withLost(Long lost) {
        this.lost = lost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending")
    public Long pending;
    public GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days withPending(Long pending) {
        this.pending = pending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postponed")
    public Long postponed;
    public GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days withPostponed(Long postponed) {
        this.postponed = postponed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("won")
    public Long won;
    public GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days withWon(Long won) {
        this.won = won;
        return this;
    }
}