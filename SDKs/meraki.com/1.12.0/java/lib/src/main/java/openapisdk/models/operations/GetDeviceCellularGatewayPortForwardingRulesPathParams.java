package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCellularGatewayPortForwardingRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceCellularGatewayPortForwardingRulesPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}