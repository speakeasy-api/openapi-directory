package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCommercialCreditCards503ErrorObject {
    @JsonProperty("description")
    public GetCommercialCreditCards503ErrorObjectDescriptionEnum description;
    public GetCommercialCreditCards503ErrorObject withDescription(GetCommercialCreditCards503ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetCommercialCreditCards503ErrorObjectStatusEnum status;
    public GetCommercialCreditCards503ErrorObject withStatus(GetCommercialCreditCards503ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetCommercialCreditCards503ErrorObjectTitleEnum title;
    public GetCommercialCreditCards503ErrorObject withTitle(GetCommercialCreditCards503ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}