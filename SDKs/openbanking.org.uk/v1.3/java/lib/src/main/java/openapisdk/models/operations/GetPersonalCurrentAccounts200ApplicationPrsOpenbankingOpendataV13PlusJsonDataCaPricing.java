package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing
 * Card Price
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing {
    @JsonProperty("CAPricingItem")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem caPricingItem;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing withCaPricingItem(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem caPricingItem) {
        this.caPricingItem = caPricingItem;
        return this;
    }
    @JsonProperty("ProductState")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum productState;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing withProductState(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum productState) {
        this.productState = productState;
        return this;
    }
}