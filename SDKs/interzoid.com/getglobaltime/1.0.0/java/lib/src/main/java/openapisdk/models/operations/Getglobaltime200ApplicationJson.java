package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getglobaltime200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClockTime")
    public String clockTime;
    public Getglobaltime200ApplicationJson withClockTime(String clockTime) {
        this.clockTime = clockTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getglobaltime200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getglobaltime200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentDate")
    public String currentDate;
    public Getglobaltime200ApplicationJson withCurrentDate(String currentDate) {
        this.currentDate = currentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentTime")
    public String currentTime;
    public Getglobaltime200ApplicationJson withCurrentTime(String currentTime) {
        this.currentTime = currentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Day")
    public String day;
    public Getglobaltime200ApplicationJson withDay(String day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hour")
    public String hour;
    public Getglobaltime200ApplicationJson withHour(String hour) {
        this.hour = hour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Locale")
    public String locale;
    public Getglobaltime200ApplicationJson withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Minute")
    public String minute;
    public Getglobaltime200ApplicationJson withMinute(String minute) {
        this.minute = minute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Month")
    public String month;
    public Getglobaltime200ApplicationJson withMonth(String month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MonthNumber")
    public String monthNumber;
    public Getglobaltime200ApplicationJson withMonthNumber(String monthNumber) {
        this.monthNumber = monthNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Second")
    public String second;
    public Getglobaltime200ApplicationJson withSecond(String second) {
        this.second = second;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeStamp")
    public String timeStamp;
    public Getglobaltime200ApplicationJson withTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Weekday")
    public String weekday;
    public Getglobaltime200ApplicationJson withWeekday(String weekday) {
        this.weekday = weekday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Year")
    public String year;
    public Getglobaltime200ApplicationJson withYear(String year) {
        this.year = year;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Zone")
    public String zone;
    public Getglobaltime200ApplicationJson withZone(String zone) {
        this.zone = zone;
        return this;
    }
}