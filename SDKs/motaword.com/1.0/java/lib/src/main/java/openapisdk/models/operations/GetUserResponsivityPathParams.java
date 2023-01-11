package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserResponsivityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetUserResponsivityPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}