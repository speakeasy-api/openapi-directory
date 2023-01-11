package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceCellularGatewayPortForwardingRulesRequest {
    public UpdateDeviceCellularGatewayPortForwardingRulesPathParams pathParams;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequest withPathParams(UpdateDeviceCellularGatewayPortForwardingRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBody request;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequest withRequest(UpdateDeviceCellularGatewayPortForwardingRulesRequestBody request) {
        this.request = request;
        return this;
    }
}