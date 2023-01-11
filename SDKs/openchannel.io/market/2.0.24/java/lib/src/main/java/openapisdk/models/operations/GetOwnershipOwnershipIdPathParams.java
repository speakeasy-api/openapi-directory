package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOwnershipOwnershipIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownershipId")
    public String ownershipId;
    public GetOwnershipOwnershipIdPathParams withOwnershipId(String ownershipId) {
        this.ownershipId = ownershipId;
        return this;
    }
}