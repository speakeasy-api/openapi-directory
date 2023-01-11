package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentManagerPatientId {
    @JsonProperty("id")
    public String id;
    public ConsentManagerPatientId withId(String id) {
        this.id = id;
        return this;
    }
}