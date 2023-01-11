package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessUsageHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apTag")
    public String apTag;
    public GetNetworkWirelessUsageHistoryQueryParams withApTag(String apTag) {
        this.apTag = apTag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=autoResolution")
    public Boolean autoResolution;
    public GetNetworkWirelessUsageHistoryQueryParams withAutoResolution(Boolean autoResolution) {
        this.autoResolution = autoResolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=band")
    public GetNetworkWirelessUsageHistoryBandEnum band;
    public GetNetworkWirelessUsageHistoryQueryParams withBand(GetNetworkWirelessUsageHistoryBandEnum band) {
        this.band = band;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public GetNetworkWirelessUsageHistoryQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceSerial")
    public String deviceSerial;
    public GetNetworkWirelessUsageHistoryQueryParams withDeviceSerial(String deviceSerial) {
        this.deviceSerial = deviceSerial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public Long resolution;
    public GetNetworkWirelessUsageHistoryQueryParams withResolution(Long resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ssid")
    public Long ssid;
    public GetNetworkWirelessUsageHistoryQueryParams withSsid(Long ssid) {
        this.ssid = ssid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkWirelessUsageHistoryQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkWirelessUsageHistoryQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkWirelessUsageHistoryQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}