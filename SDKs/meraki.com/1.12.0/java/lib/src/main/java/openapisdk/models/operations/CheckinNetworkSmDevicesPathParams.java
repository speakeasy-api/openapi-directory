package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckinNetworkSmDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CheckinNetworkSmDevicesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}