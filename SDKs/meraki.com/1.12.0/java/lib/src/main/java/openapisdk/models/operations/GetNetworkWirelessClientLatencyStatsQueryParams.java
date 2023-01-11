package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessClientLatencyStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apTag")
    public String apTag;
    public GetNetworkWirelessClientLatencyStatsQueryParams withApTag(String apTag) {
        this.apTag = apTag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=band")
    public GetNetworkWirelessClientLatencyStatsBandEnum band;
    public GetNetworkWirelessClientLatencyStatsQueryParams withBand(GetNetworkWirelessClientLatencyStatsBandEnum band) {
        this.band = band;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public GetNetworkWirelessClientLatencyStatsQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ssid")
    public Long ssid;
    public GetNetworkWirelessClientLatencyStatsQueryParams withSsid(Long ssid) {
        this.ssid = ssid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkWirelessClientLatencyStatsQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkWirelessClientLatencyStatsQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkWirelessClientLatencyStatsQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vlan")
    public Long vlan;
    public GetNetworkWirelessClientLatencyStatsQueryParams withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}