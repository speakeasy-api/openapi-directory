package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSmTargetGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSmTargetGroupPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetGroupId")
    public String targetGroupId;
    public GetNetworkSmTargetGroupPathParams withTargetGroupId(String targetGroupId) {
        this.targetGroupId = targetGroupId;
        return this;
    }
}