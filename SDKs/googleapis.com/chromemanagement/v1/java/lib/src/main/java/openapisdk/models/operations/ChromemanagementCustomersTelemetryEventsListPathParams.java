package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromemanagementCustomersTelemetryEventsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ChromemanagementCustomersTelemetryEventsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}