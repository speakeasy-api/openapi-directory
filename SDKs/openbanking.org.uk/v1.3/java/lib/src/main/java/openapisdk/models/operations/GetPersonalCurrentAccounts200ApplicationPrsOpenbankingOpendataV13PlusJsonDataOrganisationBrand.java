package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
 * Brand
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand {
    @JsonProperty("TrademarkID")
    public String trademarkID;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand withTrademarkId(String trademarkID) {
        this.trademarkID = trademarkID;
        return this;
    }
    @JsonProperty("TrademarkIPOCode")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand withTrademarkIpoCode(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode) {
        this.trademarkIPOCode = trademarkIPOCode;
        return this;
    }
}