package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromemanagementCustomersTelemetryDevicesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ChromemanagementCustomersTelemetryDevicesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}