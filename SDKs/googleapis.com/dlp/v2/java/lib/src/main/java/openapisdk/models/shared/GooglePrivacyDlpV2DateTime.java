package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DateTime
 * Message for a date time object. e.g. 2018-01-01, 5th August.
**/
public class GooglePrivacyDlpV2DateTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public GoogleTypeDate date;
    public GooglePrivacyDlpV2DateTime withDate(GoogleTypeDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public GooglePrivacyDlpV2DateTimeDayOfWeekEnum dayOfWeek;
    public GooglePrivacyDlpV2DateTime withDayOfWeek(GooglePrivacyDlpV2DateTimeDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public GoogleTypeTimeOfDay time;
    public GooglePrivacyDlpV2DateTime withTime(GoogleTypeTimeOfDay time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public GooglePrivacyDlpV2TimeZone timeZone;
    public GooglePrivacyDlpV2DateTime withTimeZone(GooglePrivacyDlpV2TimeZone timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}