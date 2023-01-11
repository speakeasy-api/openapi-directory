package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCellularGatewayLanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceCellularGatewayLanPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}