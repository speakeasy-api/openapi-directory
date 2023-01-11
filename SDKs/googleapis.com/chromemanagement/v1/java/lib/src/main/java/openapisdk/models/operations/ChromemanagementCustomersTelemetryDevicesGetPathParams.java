package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromemanagementCustomersTelemetryDevicesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ChromemanagementCustomersTelemetryDevicesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}