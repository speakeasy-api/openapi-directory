package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAtms503ErrorObject {
    @JsonProperty("description")
    public GetAtms503ErrorObjectDescriptionEnum description;
    public GetAtms503ErrorObject withDescription(GetAtms503ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetAtms503ErrorObjectStatusEnum status;
    public GetAtms503ErrorObject withStatus(GetAtms503ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetAtms503ErrorObjectTitleEnum title;
    public GetAtms503ErrorObject withTitle(GetAtms503ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}