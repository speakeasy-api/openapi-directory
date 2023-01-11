package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
 * Brand
**/
public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand {
    @JsonProperty("TrademarkID")
    public String trademarkID;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand withTrademarkId(String trademarkID) {
        this.trademarkID = trademarkID;
        return this;
    }
    @JsonProperty("TrademarkIPOCode")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand withTrademarkIpoCode(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode) {
        this.trademarkIPOCode = trademarkIPOCode;
        return this;
    }
}