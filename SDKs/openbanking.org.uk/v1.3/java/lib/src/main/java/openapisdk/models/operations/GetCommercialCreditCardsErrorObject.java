package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCommercialCreditCardsErrorObject {
    @JsonProperty("description")
    public String description;
    public GetCommercialCreditCardsErrorObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetCommercialCreditCardsErrorObject withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public GetCommercialCreditCardsErrorObject withTitle(String title) {
        this.title = title;
        return this;
    }
}