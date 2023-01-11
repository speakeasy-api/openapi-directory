package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Date
 * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
**/
public class Date {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public Integer day;
    public Date withDay(Integer day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public Integer month;
    public Date withMonth(Integer month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Integer year;
    public Date withYear(Integer year) {
        this.year = year;
        return this;
    }
}