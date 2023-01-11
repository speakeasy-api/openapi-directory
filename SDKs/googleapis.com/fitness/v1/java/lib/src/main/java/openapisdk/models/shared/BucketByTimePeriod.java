package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BucketByTimePeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZoneId")
    public String timeZoneId;
    public BucketByTimePeriod withTimeZoneId(String timeZoneId) {
        this.timeZoneId = timeZoneId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BucketByTimePeriodTypeEnum type;
    public BucketByTimePeriod withType(BucketByTimePeriodTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Integer value;
    public BucketByTimePeriod withValue(Integer value) {
        this.value = value;
        return this;
    }
}