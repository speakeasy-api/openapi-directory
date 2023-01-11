package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUnsecuredSmeLoans400ErrorObject {
    @JsonProperty("description")
    public GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum description;
    public GetUnsecuredSmeLoans400ErrorObject withDescription(GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetUnsecuredSmeLoans400ErrorObjectStatusEnum status;
    public GetUnsecuredSmeLoans400ErrorObject withStatus(GetUnsecuredSmeLoans400ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetUnsecuredSmeLoans400ErrorObjectTitleEnum title;
    public GetUnsecuredSmeLoans400ErrorObject withTitle(GetUnsecuredSmeLoans400ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}