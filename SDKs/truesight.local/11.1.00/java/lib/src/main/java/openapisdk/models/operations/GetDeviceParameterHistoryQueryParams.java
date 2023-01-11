package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceParameterHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public Long from;
    public GetDeviceParameterHistoryQueryParams withFrom(Long from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monitorSid")
    public String monitorSid;
    public GetDeviceParameterHistoryQueryParams withMonitorSid(String monitorSid) {
        this.monitorSid = monitorSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monitorType")
    public String monitorType;
    public GetDeviceParameterHistoryQueryParams withMonitorType(String monitorType) {
        this.monitorType = monitorType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameterName")
    public String parameterName;
    public GetDeviceParameterHistoryQueryParams withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public Long to;
    public GetDeviceParameterHistoryQueryParams withTo(Long to) {
        this.to = to;
        return this;
    }
}