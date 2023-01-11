package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentRequestConsentHip {
    @JsonProperty("id")
    public String id;
    public ConsentRequestConsentHip withId(String id) {
        this.id = id;
        return this;
    }
}