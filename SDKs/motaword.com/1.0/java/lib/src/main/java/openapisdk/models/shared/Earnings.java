package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Earnings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completed")
    public EarningWithTqs[] completed;
    public Earnings withCompleted(EarningWithTqs[] completed) {
        this.completed = completed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ongoing")
    public EarningWithTqs[] ongoing;
    public Earnings withOngoing(EarningWithTqs[] ongoing) {
        this.ongoing = ongoing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Float total;
    public Earnings withTotal(Float total) {
        this.total = total;
        return this;
    }
}