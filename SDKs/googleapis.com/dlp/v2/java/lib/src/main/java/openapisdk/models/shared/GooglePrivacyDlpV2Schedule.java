package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Schedule
 * Schedule for inspect job triggers.
**/
public class GooglePrivacyDlpV2Schedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrencePeriodDuration")
    public String recurrencePeriodDuration;
    public GooglePrivacyDlpV2Schedule withRecurrencePeriodDuration(String recurrencePeriodDuration) {
        this.recurrencePeriodDuration = recurrencePeriodDuration;
        return this;
    }
}