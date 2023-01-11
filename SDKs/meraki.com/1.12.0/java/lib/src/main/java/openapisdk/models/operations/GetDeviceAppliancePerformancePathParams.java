package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceAppliancePerformancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceAppliancePerformancePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}