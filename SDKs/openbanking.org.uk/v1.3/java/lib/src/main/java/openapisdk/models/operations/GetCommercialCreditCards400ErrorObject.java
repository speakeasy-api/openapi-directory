package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCommercialCreditCards400ErrorObject {
    @JsonProperty("description")
    public GetCommercialCreditCards400ErrorObjectDescriptionEnum description;
    public GetCommercialCreditCards400ErrorObject withDescription(GetCommercialCreditCards400ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetCommercialCreditCards400ErrorObjectStatusEnum status;
    public GetCommercialCreditCards400ErrorObject withStatus(GetCommercialCreditCards400ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetCommercialCreditCards400ErrorObjectTitleEnum title;
    public GetCommercialCreditCards400ErrorObject withTitle(GetCommercialCreditCards400ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}