package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUnsecuredSmeLoans429ErrorObject {
    @JsonProperty("description")
    public GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum description;
    public GetUnsecuredSmeLoans429ErrorObject withDescription(GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetUnsecuredSmeLoans429ErrorObjectStatusEnum status;
    public GetUnsecuredSmeLoans429ErrorObject withStatus(GetUnsecuredSmeLoans429ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetUnsecuredSmeLoans429ErrorObjectTitleEnum title;
    public GetUnsecuredSmeLoans429ErrorObject withTitle(GetUnsecuredSmeLoans429ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}