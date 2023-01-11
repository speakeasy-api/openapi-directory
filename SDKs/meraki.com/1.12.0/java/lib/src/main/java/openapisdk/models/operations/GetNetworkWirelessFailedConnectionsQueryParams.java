package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessFailedConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apTag")
    public String apTag;
    public GetNetworkWirelessFailedConnectionsQueryParams withApTag(String apTag) {
        this.apTag = apTag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=band")
    public GetNetworkWirelessFailedConnectionsBandEnum band;
    public GetNetworkWirelessFailedConnectionsQueryParams withBand(GetNetworkWirelessFailedConnectionsBandEnum band) {
        this.band = band;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public GetNetworkWirelessFailedConnectionsQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serial")
    public String serial;
    public GetNetworkWirelessFailedConnectionsQueryParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ssid")
    public Long ssid;
    public GetNetworkWirelessFailedConnectionsQueryParams withSsid(Long ssid) {
        this.ssid = ssid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkWirelessFailedConnectionsQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkWirelessFailedConnectionsQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkWirelessFailedConnectionsQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vlan")
    public Long vlan;
    public GetNetworkWirelessFailedConnectionsQueryParams withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}