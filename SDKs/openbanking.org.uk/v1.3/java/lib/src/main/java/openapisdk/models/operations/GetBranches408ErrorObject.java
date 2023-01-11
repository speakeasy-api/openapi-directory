package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBranches408ErrorObject {
    @JsonProperty("description")
    public GetBranches408ErrorObjectDescriptionEnum description;
    public GetBranches408ErrorObject withDescription(GetBranches408ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetBranches408ErrorObjectStatusEnum status;
    public GetBranches408ErrorObject withStatus(GetBranches408ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetBranches408ErrorObjectTitleEnum title;
    public GetBranches408ErrorObject withTitle(GetBranches408ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}