package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCommercialCreditCards408ErrorObject {
    @JsonProperty("description")
    public GetCommercialCreditCards408ErrorObjectDescriptionEnum description;
    public GetCommercialCreditCards408ErrorObject withDescription(GetCommercialCreditCards408ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetCommercialCreditCards408ErrorObjectStatusEnum status;
    public GetCommercialCreditCards408ErrorObject withStatus(GetCommercialCreditCards408ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetCommercialCreditCards408ErrorObjectTitleEnum title;
    public GetCommercialCreditCards408ErrorObject withTitle(GetCommercialCreditCards408ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}