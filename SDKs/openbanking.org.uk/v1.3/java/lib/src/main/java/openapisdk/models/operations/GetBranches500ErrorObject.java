package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBranches500ErrorObject {
    @JsonProperty("description")
    public GetBranches500ErrorObjectDescriptionEnum description;
    public GetBranches500ErrorObject withDescription(GetBranches500ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetBranches500ErrorObjectStatusEnum status;
    public GetBranches500ErrorObject withStatus(GetBranches500ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetBranches500ErrorObjectTitleEnum title;
    public GetBranches500ErrorObject withTitle(GetBranches500ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}