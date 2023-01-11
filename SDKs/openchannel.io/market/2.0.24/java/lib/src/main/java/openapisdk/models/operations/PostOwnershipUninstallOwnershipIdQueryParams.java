package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOwnershipUninstallOwnershipIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cancelOwnership")
    public Boolean cancelOwnership;
    public PostOwnershipUninstallOwnershipIdQueryParams withCancelOwnership(Boolean cancelOwnership) {
        this.cancelOwnership = cancelOwnership;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostOwnershipUninstallOwnershipIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public PostOwnershipUninstallOwnershipIdQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}