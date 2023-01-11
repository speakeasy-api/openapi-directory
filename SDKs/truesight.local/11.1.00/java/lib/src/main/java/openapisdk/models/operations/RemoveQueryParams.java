package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monitorClass")
    public String monitorClass;
    public RemoveQueryParams withMonitorClass(String monitorClass) {
        this.monitorClass = monitorClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monitorSid")
    public String monitorSid;
    public RemoveQueryParams withMonitorSid(String monitorSid) {
        this.monitorSid = monitorSid;
        return this;
    }
}