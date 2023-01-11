package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Note {
    @JsonProperty("body")
    public String body;
    public Note withBody(String body) {
        this.body = body;
        return this;
    }
}