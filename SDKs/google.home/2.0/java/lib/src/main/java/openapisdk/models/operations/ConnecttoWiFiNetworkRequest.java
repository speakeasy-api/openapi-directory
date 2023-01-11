package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnecttoWiFiNetworkRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnecttoWiFiNetworkRequest request;
    public ConnecttoWiFiNetworkRequest withRequest(openapisdk.models.shared.ConnecttoWiFiNetworkRequest request) {
        this.request = request;
        return this;
    }
}