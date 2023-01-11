package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Locale {
    @JsonProperty("display_string")
    public String displayString;
    public Locale withDisplayString(String displayString) {
        this.displayString = displayString;
        return this;
    }
}