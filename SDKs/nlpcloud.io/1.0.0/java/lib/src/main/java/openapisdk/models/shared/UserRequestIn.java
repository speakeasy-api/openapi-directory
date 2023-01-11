package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserRequestIn {
    @JsonProperty("text")
    public String text;
    public UserRequestIn withText(String text) {
        this.text = text;
        return this;
    }
}