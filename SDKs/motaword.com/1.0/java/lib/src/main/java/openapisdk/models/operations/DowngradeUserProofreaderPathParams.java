package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DowngradeUserProofreaderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public DowngradeUserProofreaderPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}