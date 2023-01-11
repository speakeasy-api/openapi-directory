package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsRemoveProjectLegacy415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public TeamsRemoveProjectLegacy415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public TeamsRemoveProjectLegacy415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}