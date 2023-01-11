package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MakeUserProofreaderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public MakeUserProofreaderPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}