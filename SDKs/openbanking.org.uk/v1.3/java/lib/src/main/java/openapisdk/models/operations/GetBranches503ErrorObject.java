package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBranches503ErrorObject {
    @JsonProperty("description")
    public GetBranches503ErrorObjectDescriptionEnum description;
    public GetBranches503ErrorObject withDescription(GetBranches503ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetBranches503ErrorObjectStatusEnum status;
    public GetBranches503ErrorObject withStatus(GetBranches503ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetBranches503ErrorObjectTitleEnum title;
    public GetBranches503ErrorObject withTitle(GetBranches503ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}