package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Period
 * Represents period in days/months/years.
**/
public class GoogleCloudChannelV1Period {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Integer duration;
    public GoogleCloudChannelV1Period withDuration(Integer duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodType")
    public GoogleCloudChannelV1PeriodPeriodTypeEnum periodType;
    public GoogleCloudChannelV1Period withPeriodType(GoogleCloudChannelV1PeriodPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
}