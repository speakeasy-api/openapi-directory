package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocalTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chronology")
    public Chronology chronology;
    public LocalTime withChronology(Chronology chronology) {
        this.chronology = chronology;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldTypes")
    public DateTimeFieldType[] fieldTypes;
    public LocalTime withFieldTypes(DateTimeFieldType[] fieldTypes) {
        this.fieldTypes = fieldTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public DateTimeField[] fields;
    public LocalTime withFields(DateTimeField[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hourOfDay")
    public Integer hourOfDay;
    public LocalTime withHourOfDay(Integer hourOfDay) {
        this.hourOfDay = hourOfDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("millisOfDay")
    public Integer millisOfDay;
    public LocalTime withMillisOfDay(Integer millisOfDay) {
        this.millisOfDay = millisOfDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("millisOfSecond")
    public Integer millisOfSecond;
    public LocalTime withMillisOfSecond(Integer millisOfSecond) {
        this.millisOfSecond = millisOfSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minuteOfHour")
    public Integer minuteOfHour;
    public LocalTime withMinuteOfHour(Integer minuteOfHour) {
        this.minuteOfHour = minuteOfHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondOfMinute")
    public Integer secondOfMinute;
    public LocalTime withSecondOfMinute(Integer secondOfMinute) {
        this.secondOfMinute = secondOfMinute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public Integer[] values;
    public LocalTime withValues(Integer[] values) {
        this.values = values;
        return this;
    }
}