package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSmDevicesFieldsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSmDevicesFieldsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}