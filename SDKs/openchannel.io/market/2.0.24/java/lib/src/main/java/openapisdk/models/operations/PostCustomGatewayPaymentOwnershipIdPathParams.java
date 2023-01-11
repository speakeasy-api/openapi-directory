package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomGatewayPaymentOwnershipIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownershipId")
    public String ownershipId;
    public PostCustomGatewayPaymentOwnershipIdPathParams withOwnershipId(String ownershipId) {
        this.ownershipId = ownershipId;
        return this;
    }
}