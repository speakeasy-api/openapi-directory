package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Example14 {
    @JsonProperty("display_string")
    public String displayString;
    public Example14 withDisplayString(String displayString) {
        this.displayString = displayString;
        return this;
    }
    @JsonProperty("offset")
    public Integer offset;
    public Example14 withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonProperty("timezone")
    public String timezone;
    public Example14 withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}