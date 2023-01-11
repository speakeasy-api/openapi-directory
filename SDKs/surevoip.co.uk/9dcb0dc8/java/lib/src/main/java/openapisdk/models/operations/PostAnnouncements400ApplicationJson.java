package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAnnouncements400ApplicationJson {
    @JsonProperty("errors")
    public PostAnnouncements400ApplicationJsonErrors[] errors;
    public PostAnnouncements400ApplicationJson withErrors(PostAnnouncements400ApplicationJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
}