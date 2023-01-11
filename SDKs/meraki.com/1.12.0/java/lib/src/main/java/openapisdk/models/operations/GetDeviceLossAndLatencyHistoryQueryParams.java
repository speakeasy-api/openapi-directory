package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceLossAndLatencyHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ip")
    public String ip;
    public GetDeviceLossAndLatencyHistoryQueryParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public Long resolution;
    public GetDeviceLossAndLatencyHistoryQueryParams withResolution(Long resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetDeviceLossAndLatencyHistoryQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetDeviceLossAndLatencyHistoryQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetDeviceLossAndLatencyHistoryQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uplink")
    public GetDeviceLossAndLatencyHistoryUplinkEnum uplink;
    public GetDeviceLossAndLatencyHistoryQueryParams withUplink(GetDeviceLossAndLatencyHistoryUplinkEnum uplink) {
        this.uplink = uplink;
        return this;
    }
}