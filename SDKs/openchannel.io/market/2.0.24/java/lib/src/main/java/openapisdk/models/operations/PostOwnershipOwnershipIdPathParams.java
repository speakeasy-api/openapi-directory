package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOwnershipOwnershipIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownershipId")
    public String ownershipId;
    public PostOwnershipOwnershipIdPathParams withOwnershipId(String ownershipId) {
        this.ownershipId = ownershipId;
        return this;
    }
}