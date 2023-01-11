package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentRequestConsentHiu {
    @JsonProperty("id")
    public String id;
    public ConsentRequestConsentHiu withId(String id) {
        this.id = id;
        return this;
    }
}