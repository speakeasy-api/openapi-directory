package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBranches400ErrorObject {
    @JsonProperty("description")
    public GetBranches400ErrorObjectDescriptionEnum description;
    public GetBranches400ErrorObject withDescription(GetBranches400ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetBranches400ErrorObjectStatusEnum status;
    public GetBranches400ErrorObject withStatus(GetBranches400ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetBranches400ErrorObjectTitleEnum title;
    public GetBranches400ErrorObject withTitle(GetBranches400ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}