package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBranchesErrorObject {
    @JsonProperty("description")
    public String description;
    public GetBranchesErrorObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetBranchesErrorObject withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public GetBranchesErrorObject withTitle(String title) {
        this.title = title;
        return this;
    }
}