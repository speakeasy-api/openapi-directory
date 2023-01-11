package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAtms400ErrorObject {
    @JsonProperty("description")
    public GetAtms400ErrorObjectDescriptionEnum description;
    public GetAtms400ErrorObject withDescription(GetAtms400ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetAtms400ErrorObjectStatusEnum status;
    public GetAtms400ErrorObject withStatus(GetAtms400ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetAtms400ErrorObjectTitleEnum title;
    public GetAtms400ErrorObject withTitle(GetAtms400ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}