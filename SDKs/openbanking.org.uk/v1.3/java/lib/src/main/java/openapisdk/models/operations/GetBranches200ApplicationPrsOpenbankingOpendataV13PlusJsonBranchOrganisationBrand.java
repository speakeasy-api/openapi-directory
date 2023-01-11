package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand
 * Brand
**/
public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand {
    @JsonProperty("TrademarkID")
    public String trademarkID;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand withTrademarkId(String trademarkID) {
        this.trademarkID = trademarkID;
        return this;
    }
    @JsonProperty("TrademarkIPOCode")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand withTrademarkIpoCode(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum trademarkIPOCode) {
        this.trademarkIPOCode = trademarkIPOCode;
        return this;
    }
}