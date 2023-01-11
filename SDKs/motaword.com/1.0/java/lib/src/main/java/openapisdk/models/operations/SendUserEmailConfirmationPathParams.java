package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendUserEmailConfirmationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public SendUserEmailConfirmationPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}