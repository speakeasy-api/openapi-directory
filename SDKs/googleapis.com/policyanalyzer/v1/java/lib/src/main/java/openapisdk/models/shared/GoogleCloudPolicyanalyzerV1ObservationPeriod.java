package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicyanalyzerV1ObservationPeriod
 * Represents data observation period.
**/
public class GoogleCloudPolicyanalyzerV1ObservationPeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public GoogleCloudPolicyanalyzerV1ObservationPeriod withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudPolicyanalyzerV1ObservationPeriod withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}