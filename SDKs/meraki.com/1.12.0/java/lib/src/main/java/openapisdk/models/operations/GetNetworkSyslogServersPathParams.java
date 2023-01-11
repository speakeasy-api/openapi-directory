package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSyslogServersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSyslogServersPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}