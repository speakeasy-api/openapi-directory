package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ForgetWiFiNetworkRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ForgetWiFiNetworkRequest request;
    public ForgetWiFiNetworkRequest withRequest(openapisdk.models.shared.ForgetWiFiNetworkRequest request) {
        this.request = request;
        return this;
    }
}