package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SystemTimezoneViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUtcOffset")
    public Integer baseUtcOffset;
    public SystemTimezoneViewModel withBaseUtcOffset(Integer baseUtcOffset) {
        this.baseUtcOffset = baseUtcOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daylightName")
    public String daylightName;
    public SystemTimezoneViewModel withDaylightName(String daylightName) {
        this.daylightName = daylightName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SystemTimezoneViewModel withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardName")
    public String standardName;
    public SystemTimezoneViewModel withStandardName(String standardName) {
        this.standardName = standardName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsDaylightSavingTime")
    public Boolean supportsDaylightSavingTime;
    public SystemTimezoneViewModel withSupportsDaylightSavingTime(Boolean supportsDaylightSavingTime) {
        this.supportsDaylightSavingTime = supportsDaylightSavingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneIana")
    public String timezoneIana;
    public SystemTimezoneViewModel withTimezoneIana(String timezoneIana) {
        this.timezoneIana = timezoneIana;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneId")
    public String timezoneId;
    public SystemTimezoneViewModel withTimezoneId(String timezoneId) {
        this.timezoneId = timezoneId;
        return this;
    }
}