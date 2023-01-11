package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerPubprofilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Long accountId;
    public AdexchangebuyerPubprofilesListPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}