package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPaymentInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetUserPaymentInfoPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}