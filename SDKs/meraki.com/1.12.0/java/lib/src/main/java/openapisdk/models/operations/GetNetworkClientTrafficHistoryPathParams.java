package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkClientTrafficHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public GetNetworkClientTrafficHistoryPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkClientTrafficHistoryPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}