package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerCreativesRemoveDealPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Long accountId;
    public AdexchangebuyerCreativesRemoveDealPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=buyerCreativeId")
    public String buyerCreativeId;
    public AdexchangebuyerCreativesRemoveDealPathParams withBuyerCreativeId(String buyerCreativeId) {
        this.buyerCreativeId = buyerCreativeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dealId")
    public String dealId;
    public AdexchangebuyerCreativesRemoveDealPathParams withDealId(String dealId) {
        this.dealId = dealId;
        return this;
    }
}