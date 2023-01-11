package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceApplianceDhcpSubnetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceApplianceDhcpSubnetsPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}