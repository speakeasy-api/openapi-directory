package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSmTargetGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSmTargetGroupPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetGroupId")
    public String targetGroupId;
    public UpdateNetworkSmTargetGroupPathParams withTargetGroupId(String targetGroupId) {
        this.targetGroupId = targetGroupId;
        return this;
    }
}