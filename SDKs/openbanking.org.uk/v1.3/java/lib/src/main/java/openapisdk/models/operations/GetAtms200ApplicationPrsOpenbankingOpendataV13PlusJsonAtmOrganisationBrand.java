package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand
 * Brand
**/
public class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand {
    @JsonProperty("TrademarkID")
    public String trademarkID;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand withTrademarkId(String trademarkID) {
        this.trademarkID = trademarkID;
        return this;
    }
    @JsonProperty("TrademarkIPOCode")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand withTrademarkIpoCode(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode) {
        this.trademarkIPOCode = trademarkIPOCode;
        return this;
    }
}