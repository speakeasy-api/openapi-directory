package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CreateJobTriggerRequestInput
 * Request message for CreateJobTrigger.
**/
public class GooglePrivacyDlpV2CreateJobTriggerRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTrigger")
    public GooglePrivacyDlpV2JobTriggerInput jobTrigger;
    public GooglePrivacyDlpV2CreateJobTriggerRequestInput withJobTrigger(GooglePrivacyDlpV2JobTriggerInput jobTrigger) {
        this.jobTrigger = jobTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GooglePrivacyDlpV2CreateJobTriggerRequestInput withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerId")
    public String triggerId;
    public GooglePrivacyDlpV2CreateJobTriggerRequestInput withTriggerId(String triggerId) {
        this.triggerId = triggerId;
        return this;
    }
}