package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceLossAndLatencyHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceLossAndLatencyHistoryPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}