package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors {
    @JsonProperty("field")
    public String field;
    public OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors withField(String field) {
        this.field = field;
        return this;
    }
    @JsonProperty("message")
    public String[] message;
    public OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors withMessage(String[] message) {
        this.message = message;
        return this;
    }
}