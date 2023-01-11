package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCommercialCreditCards429ErrorObject {
    @JsonProperty("description")
    public GetCommercialCreditCards429ErrorObjectDescriptionEnum description;
    public GetCommercialCreditCards429ErrorObject withDescription(GetCommercialCreditCards429ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetCommercialCreditCards429ErrorObjectStatusEnum status;
    public GetCommercialCreditCards429ErrorObject withStatus(GetCommercialCreditCards429ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetCommercialCreditCards429ErrorObjectTitleEnum title;
    public GetCommercialCreditCards429ErrorObject withTitle(GetCommercialCreditCards429ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}