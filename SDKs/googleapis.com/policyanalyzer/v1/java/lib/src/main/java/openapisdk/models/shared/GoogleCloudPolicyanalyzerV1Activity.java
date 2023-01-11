package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPolicyanalyzerV1Activity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity")
    public java.util.Map<String, Object> activity;
    public GoogleCloudPolicyanalyzerV1Activity withActivity(java.util.Map<String, Object> activity) {
        this.activity = activity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityType")
    public String activityType;
    public GoogleCloudPolicyanalyzerV1Activity withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public GoogleCloudPolicyanalyzerV1Activity withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observationPeriod")
    public GoogleCloudPolicyanalyzerV1ObservationPeriod observationPeriod;
    public GoogleCloudPolicyanalyzerV1Activity withObservationPeriod(GoogleCloudPolicyanalyzerV1ObservationPeriod observationPeriod) {
        this.observationPeriod = observationPeriod;
        return this;
    }
}