package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSyslogServersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSyslogServersPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}