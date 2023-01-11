package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentRequestInitResponseConsentRequest {
    @JsonProperty("id")
    public String id;
    public ConsentRequestInitResponseConsentRequest withId(String id) {
        this.id = id;
        return this;
    }
}