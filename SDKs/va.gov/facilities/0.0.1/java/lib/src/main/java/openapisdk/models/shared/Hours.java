package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Hours
 * Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
**/
public class Hours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friday")
    public String friday;
    public Hours withFriday(String friday) {
        this.friday = friday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monday")
    public String monday;
    public Hours withMonday(String monday) {
        this.monday = monday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturday")
    public String saturday;
    public Hours withSaturday(String saturday) {
        this.saturday = saturday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sunday")
    public String sunday;
    public Hours withSunday(String sunday) {
        this.sunday = sunday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thursday")
    public String thursday;
    public Hours withThursday(String thursday) {
        this.thursday = thursday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tuesday")
    public String tuesday;
    public Hours withTuesday(String tuesday) {
        this.tuesday = tuesday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wednesday")
    public String wednesday;
    public Hours withWednesday(String wednesday) {
        this.wednesday = wednesday;
        return this;
    }
}