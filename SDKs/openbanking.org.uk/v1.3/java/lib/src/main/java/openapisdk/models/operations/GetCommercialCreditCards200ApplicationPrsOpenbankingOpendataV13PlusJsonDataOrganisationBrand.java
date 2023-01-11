package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
 * Brand
**/
public class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand {
    @JsonProperty("TrademarkID")
    public String trademarkID;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand withTrademarkId(String trademarkID) {
        this.trademarkID = trademarkID;
        return this;
    }
    @JsonProperty("TrademarkIPOCode")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand withTrademarkIpoCode(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode) {
        this.trademarkIPOCode = trademarkIPOCode;
        return this;
    }
}