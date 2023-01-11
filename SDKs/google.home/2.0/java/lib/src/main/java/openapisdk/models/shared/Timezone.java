package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Timezone {
    @JsonProperty("display_string")
    public String displayString;
    public Timezone withDisplayString(String displayString) {
        this.displayString = displayString;
        return this;
    }
    @JsonProperty("offset")
    public Integer offset;
    public Timezone withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}