package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceCellularGatewayLanRequest {
    public UpdateDeviceCellularGatewayLanPathParams pathParams;
    public UpdateDeviceCellularGatewayLanRequest withPathParams(UpdateDeviceCellularGatewayLanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceCellularGatewayLanRequestBody request;
    public UpdateDeviceCellularGatewayLanRequest withRequest(UpdateDeviceCellularGatewayLanRequestBody request) {
        this.request = request;
        return this;
    }
}