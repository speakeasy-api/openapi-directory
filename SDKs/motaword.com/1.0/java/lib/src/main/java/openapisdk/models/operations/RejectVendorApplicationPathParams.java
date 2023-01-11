package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectVendorApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public RejectVendorApplicationPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}