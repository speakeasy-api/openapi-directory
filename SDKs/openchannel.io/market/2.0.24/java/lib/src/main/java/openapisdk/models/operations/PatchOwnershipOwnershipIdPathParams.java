package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOwnershipOwnershipIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownershipId")
    public String ownershipId;
    public PatchOwnershipOwnershipIdPathParams withOwnershipId(String ownershipId) {
        this.ownershipId = ownershipId;
        return this;
    }
}