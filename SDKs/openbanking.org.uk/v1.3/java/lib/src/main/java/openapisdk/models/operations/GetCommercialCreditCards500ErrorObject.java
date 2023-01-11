package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCommercialCreditCards500ErrorObject {
    @JsonProperty("description")
    public GetCommercialCreditCards500ErrorObjectDescriptionEnum description;
    public GetCommercialCreditCards500ErrorObject withDescription(GetCommercialCreditCards500ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetCommercialCreditCards500ErrorObjectStatusEnum status;
    public GetCommercialCreditCards500ErrorObject withStatus(GetCommercialCreditCards500ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetCommercialCreditCards500ErrorObjectTitleEnum title;
    public GetCommercialCreditCards500ErrorObject withTitle(GetCommercialCreditCards500ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}