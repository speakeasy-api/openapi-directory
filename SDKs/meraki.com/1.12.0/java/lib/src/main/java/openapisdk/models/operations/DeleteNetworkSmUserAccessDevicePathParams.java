package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkSmUserAccessDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkSmUserAccessDevicePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userAccessDeviceId")
    public String userAccessDeviceId;
    public DeleteNetworkSmUserAccessDevicePathParams withUserAccessDeviceId(String userAccessDeviceId) {
        this.userAccessDeviceId = userAccessDeviceId;
        return this;
    }
}