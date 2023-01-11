package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserDocumentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetUserDocumentsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}