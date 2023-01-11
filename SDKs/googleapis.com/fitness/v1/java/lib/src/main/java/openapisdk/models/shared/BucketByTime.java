package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BucketByTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationMillis")
    public String durationMillis;
    public BucketByTime withDurationMillis(String durationMillis) {
        this.durationMillis = durationMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public BucketByTimePeriod period;
    public BucketByTime withPeriod(BucketByTimePeriod period) {
        this.period = period;
        return this;
    }
}