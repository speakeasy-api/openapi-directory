package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkMqttBrokerRequest {
    public CreateNetworkMqttBrokerPathParams pathParams;
    public CreateNetworkMqttBrokerRequest withPathParams(CreateNetworkMqttBrokerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkMqttBrokerRequestBody request;
    public CreateNetworkMqttBrokerRequest withRequest(CreateNetworkMqttBrokerRequestBody request) {
        this.request = request;
        return this;
    }
}