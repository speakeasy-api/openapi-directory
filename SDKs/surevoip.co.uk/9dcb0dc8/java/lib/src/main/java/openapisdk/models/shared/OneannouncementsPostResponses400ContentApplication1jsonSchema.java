package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OneannouncementsPostResponses400ContentApplication1jsonSchema {
    @JsonProperty("errors")
    public OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors[] errors;
    public OneannouncementsPostResponses400ContentApplication1jsonSchema withErrors(OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors[] errors) {
        this.errors = errors;
        return this;
    }
}