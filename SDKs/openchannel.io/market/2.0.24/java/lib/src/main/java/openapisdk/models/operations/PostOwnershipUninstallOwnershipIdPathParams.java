package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOwnershipUninstallOwnershipIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownershipId")
    public String ownershipId;
    public PostOwnershipUninstallOwnershipIdPathParams withOwnershipId(String ownershipId) {
        this.ownershipId = ownershipId;
        return this;
    }
}