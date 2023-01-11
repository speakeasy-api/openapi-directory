package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVendorProjectsByUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetVendorProjectsByUserIdPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}