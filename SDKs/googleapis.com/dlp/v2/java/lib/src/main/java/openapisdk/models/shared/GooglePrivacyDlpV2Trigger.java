package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Trigger
 * What event needs to occur for a new job to be started.
**/
public class GooglePrivacyDlpV2Trigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manual")
    public java.util.Map<String, Object> manual;
    public GooglePrivacyDlpV2Trigger withManual(java.util.Map<String, Object> manual) {
        this.manual = manual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public GooglePrivacyDlpV2Schedule schedule;
    public GooglePrivacyDlpV2Trigger withSchedule(GooglePrivacyDlpV2Schedule schedule) {
        this.schedule = schedule;
        return this;
    }
}