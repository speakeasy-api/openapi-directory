package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentRequestConsentPatient {
    @JsonProperty("id")
    public String id;
    public ConsentRequestConsentPatient withId(String id) {
        this.id = id;
        return this;
    }
}