package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimezonesViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TimezonesViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public TimezonesViewModel withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneIanna")
    public String timezoneIanna;
    public TimezonesViewModel withTimezoneIanna(String timezoneIanna) {
        this.timezoneIanna = timezoneIanna;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tzOffset")
    public Integer tzOffset;
    public TimezonesViewModel withTzOffset(Integer tzOffset) {
        this.tzOffset = tzOffset;
        return this;
    }
}