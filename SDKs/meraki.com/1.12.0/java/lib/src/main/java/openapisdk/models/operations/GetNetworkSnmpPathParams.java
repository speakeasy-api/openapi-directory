package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSnmpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSnmpPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}