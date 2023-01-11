package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApproveVendorApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public ApproveVendorApplicationPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}