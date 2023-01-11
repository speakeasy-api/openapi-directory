package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerCreativesAddDealPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Long accountId;
    public AdexchangebuyerCreativesAddDealPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=buyerCreativeId")
    public String buyerCreativeId;
    public AdexchangebuyerCreativesAddDealPathParams withBuyerCreativeId(String buyerCreativeId) {
        this.buyerCreativeId = buyerCreativeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dealId")
    public String dealId;
    public AdexchangebuyerCreativesAddDealPathParams withDealId(String dealId) {
        this.dealId = dealId;
        return this;
    }
}