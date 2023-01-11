package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUnsecuredSmeLoans503ErrorObject {
    @JsonProperty("description")
    public GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum description;
    public GetUnsecuredSmeLoans503ErrorObject withDescription(GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetUnsecuredSmeLoans503ErrorObjectStatusEnum status;
    public GetUnsecuredSmeLoans503ErrorObject withStatus(GetUnsecuredSmeLoans503ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetUnsecuredSmeLoans503ErrorObjectTitleEnum title;
    public GetUnsecuredSmeLoans503ErrorObject withTitle(GetUnsecuredSmeLoans503ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}