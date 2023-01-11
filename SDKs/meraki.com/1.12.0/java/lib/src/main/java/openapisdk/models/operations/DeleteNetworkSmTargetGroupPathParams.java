package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkSmTargetGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkSmTargetGroupPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetGroupId")
    public String targetGroupId;
    public DeleteNetworkSmTargetGroupPathParams withTargetGroupId(String targetGroupId) {
        this.targetGroupId = targetGroupId;
        return this;
    }
}