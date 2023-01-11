package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAtms500ErrorObject {
    @JsonProperty("description")
    public GetAtms500ErrorObjectDescriptionEnum description;
    public GetAtms500ErrorObject withDescription(GetAtms500ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetAtms500ErrorObjectStatusEnum status;
    public GetAtms500ErrorObject withStatus(GetAtms500ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetAtms500ErrorObjectTitleEnum title;
    public GetAtms500ErrorObject withTitle(GetAtms500ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}