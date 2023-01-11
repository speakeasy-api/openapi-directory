package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomGatewayRefundOwnershipIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownershipId")
    public String ownershipId;
    public PostCustomGatewayRefundOwnershipIdPathParams withOwnershipId(String ownershipId) {
        this.ownershipId = ownershipId;
        return this;
    }
}