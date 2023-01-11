package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetailedServiceHours
 * Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
**/
public class DetailedServiceHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Friday")
    public String friday;
    public DetailedServiceHours withFriday(String friday) {
        this.friday = friday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Monday")
    public String monday;
    public DetailedServiceHours withMonday(String monday) {
        this.monday = monday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Saturday")
    public String saturday;
    public DetailedServiceHours withSaturday(String saturday) {
        this.saturday = saturday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sunday")
    public String sunday;
    public DetailedServiceHours withSunday(String sunday) {
        this.sunday = sunday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Thursday")
    public String thursday;
    public DetailedServiceHours withThursday(String thursday) {
        this.thursday = thursday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tuesday")
    public String tuesday;
    public DetailedServiceHours withTuesday(String tuesday) {
        this.tuesday = tuesday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wednesday")
    public String wednesday;
    public DetailedServiceHours withWednesday(String wednesday) {
        this.wednesday = wednesday;
        return this;
    }
}