package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HolidayCalendar {
    @JsonProperty("label")
    public String label;
    public HolidayCalendar withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public HolidayCalendar withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}