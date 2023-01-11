package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserPaymentInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public UpdateUserPaymentInfoPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}