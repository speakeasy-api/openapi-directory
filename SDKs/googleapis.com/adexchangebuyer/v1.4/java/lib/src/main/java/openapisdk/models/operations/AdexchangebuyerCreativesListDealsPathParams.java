package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerCreativesListDealsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Long accountId;
    public AdexchangebuyerCreativesListDealsPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=buyerCreativeId")
    public String buyerCreativeId;
    public AdexchangebuyerCreativesListDealsPathParams withBuyerCreativeId(String buyerCreativeId) {
        this.buyerCreativeId = buyerCreativeId;
        return this;
    }
}