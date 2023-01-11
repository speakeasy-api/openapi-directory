package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUnsecuredSmeLoans408ErrorObject {
    @JsonProperty("description")
    public GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum description;
    public GetUnsecuredSmeLoans408ErrorObject withDescription(GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetUnsecuredSmeLoans408ErrorObjectStatusEnum status;
    public GetUnsecuredSmeLoans408ErrorObject withStatus(GetUnsecuredSmeLoans408ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetUnsecuredSmeLoans408ErrorObjectTitleEnum title;
    public GetUnsecuredSmeLoans408ErrorObject withTitle(GetUnsecuredSmeLoans408ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}