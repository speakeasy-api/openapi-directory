package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerBillingInfoGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Long accountId;
    public AdexchangebuyerBillingInfoGetPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}