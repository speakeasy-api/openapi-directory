package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatafeedFetchSchedule
 * The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
**/
public class DatafeedFetchSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfMonth")
    public Long dayOfMonth;
    public DatafeedFetchSchedule withDayOfMonth(Long dayOfMonth) {
        this.dayOfMonth = dayOfMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fetchUrl")
    public String fetchUrl;
    public DatafeedFetchSchedule withFetchUrl(String fetchUrl) {
        this.fetchUrl = fetchUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hour")
    public Long hour;
    public DatafeedFetchSchedule withHour(Long hour) {
        this.hour = hour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minuteOfHour")
    public Long minuteOfHour;
    public DatafeedFetchSchedule withMinuteOfHour(Long minuteOfHour) {
        this.minuteOfHour = minuteOfHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public DatafeedFetchSchedule withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paused")
    public Boolean paused;
    public DatafeedFetchSchedule withPaused(Boolean paused) {
        this.paused = paused;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public DatafeedFetchSchedule withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public DatafeedFetchSchedule withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekday")
    public String weekday;
    public DatafeedFetchSchedule withWeekday(String weekday) {
        this.weekday = weekday;
        return this;
    }
}