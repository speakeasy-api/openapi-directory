package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails
 * Commercial Credit Card Group 
**/
public class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails {
    @JsonProperty("CCSubType")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum ccSubType;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails withCcSubType(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum ccSubType) {
        this.ccSubType = ccSubType;
        return this;
    }
    @JsonProperty("CommercialCreditCardItem")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem commercialCreditCardItem;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails withCommercialCreditCardItem(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem commercialCreditCardItem) {
        this.commercialCreditCardItem = commercialCreditCardItem;
        return this;
    }
}