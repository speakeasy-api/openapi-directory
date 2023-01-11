package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerCreativesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Long accountId;
    public AdexchangebuyerCreativesGetPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=buyerCreativeId")
    public String buyerCreativeId;
    public AdexchangebuyerCreativesGetPathParams withBuyerCreativeId(String buyerCreativeId) {
        this.buyerCreativeId = buyerCreativeId;
        return this;
    }
}