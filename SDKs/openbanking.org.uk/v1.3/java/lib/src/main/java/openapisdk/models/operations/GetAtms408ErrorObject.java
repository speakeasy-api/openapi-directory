package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAtms408ErrorObject {
    @JsonProperty("description")
    public GetAtms408ErrorObjectDescriptionEnum description;
    public GetAtms408ErrorObject withDescription(GetAtms408ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetAtms408ErrorObjectStatusEnum status;
    public GetAtms408ErrorObject withStatus(GetAtms408ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetAtms408ErrorObjectTitleEnum title;
    public GetAtms408ErrorObject withTitle(GetAtms408ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}