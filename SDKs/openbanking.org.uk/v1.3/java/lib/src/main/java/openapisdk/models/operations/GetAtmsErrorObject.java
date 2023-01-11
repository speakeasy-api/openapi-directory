package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAtmsErrorObject {
    @JsonProperty("description")
    public String description;
    public GetAtmsErrorObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetAtmsErrorObject withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public GetAtmsErrorObject withTitle(String title) {
        this.title = title;
        return this;
    }
}