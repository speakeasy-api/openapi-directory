package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationDevicesUplinksLossAndLatencyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ip")
    public String ip;
    public GetOrganizationDevicesUplinksLossAndLatencyQueryParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetOrganizationDevicesUplinksLossAndLatencyQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetOrganizationDevicesUplinksLossAndLatencyQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetOrganizationDevicesUplinksLossAndLatencyQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uplink")
    public GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum uplink;
    public GetOrganizationDevicesUplinksLossAndLatencyQueryParams withUplink(GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum uplink) {
        this.uplink = uplink;
        return this;
    }
}