package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkMqttBrokerRequest {
    public UpdateNetworkMqttBrokerPathParams pathParams;
    public UpdateNetworkMqttBrokerRequest withPathParams(UpdateNetworkMqttBrokerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkMqttBrokerRequestBody request;
    public UpdateNetworkMqttBrokerRequest withRequest(UpdateNetworkMqttBrokerRequestBody request) {
        this.request = request;
        return this;
    }
}