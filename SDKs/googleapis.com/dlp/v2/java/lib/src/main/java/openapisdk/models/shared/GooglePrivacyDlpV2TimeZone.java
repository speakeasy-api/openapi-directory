package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TimeZone
 * Time zone of the date time object.
**/
public class GooglePrivacyDlpV2TimeZone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetMinutes")
    public Integer offsetMinutes;
    public GooglePrivacyDlpV2TimeZone withOffsetMinutes(Integer offsetMinutes) {
        this.offsetMinutes = offsetMinutes;
        return this;
    }
}