package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimezoneViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public String[] regions;
    public TimezoneViewModel withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezones")
    public TimezonesViewModel[] timezones;
    public TimezoneViewModel withTimezones(TimezonesViewModel[] timezones) {
        this.timezones = timezones;
        return this;
    }
}