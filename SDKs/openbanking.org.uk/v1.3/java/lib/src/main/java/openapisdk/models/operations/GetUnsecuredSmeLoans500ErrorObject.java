package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUnsecuredSmeLoans500ErrorObject {
    @JsonProperty("description")
    public GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum description;
    public GetUnsecuredSmeLoans500ErrorObject withDescription(GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetUnsecuredSmeLoans500ErrorObjectStatusEnum status;
    public GetUnsecuredSmeLoans500ErrorObject withStatus(GetUnsecuredSmeLoans500ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetUnsecuredSmeLoans500ErrorObjectTitleEnum title;
    public GetUnsecuredSmeLoans500ErrorObject withTitle(GetUnsecuredSmeLoans500ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}