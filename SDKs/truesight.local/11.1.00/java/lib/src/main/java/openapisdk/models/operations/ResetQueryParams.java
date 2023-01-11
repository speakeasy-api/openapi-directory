package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monitorClass")
    public String monitorClass;
    public ResetQueryParams withMonitorClass(String monitorClass) {
        this.monitorClass = monitorClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monitorSid")
    public String monitorSid;
    public ResetQueryParams withMonitorSid(String monitorSid) {
        this.monitorSid = monitorSid;
        return this;
    }
}