package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAnnouncements400ApplicationJsonErrors {
    @JsonProperty("field")
    public String field;
    public PostAnnouncements400ApplicationJsonErrors withField(String field) {
        this.field = field;
        return this;
    }
    @JsonProperty("message")
    public String[] message;
    public PostAnnouncements400ApplicationJsonErrors withMessage(String[] message) {
        this.message = message;
        return this;
    }
}