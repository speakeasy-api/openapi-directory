package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentArtefactReference {
    @JsonProperty("id")
    public String id;
    public ConsentArtefactReference withId(String id) {
        this.id = id;
        return this;
    }
}