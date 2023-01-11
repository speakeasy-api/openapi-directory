package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessClientCountHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apTag")
    public String apTag;
    public GetNetworkWirelessClientCountHistoryQueryParams withApTag(String apTag) {
        this.apTag = apTag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=autoResolution")
    public Boolean autoResolution;
    public GetNetworkWirelessClientCountHistoryQueryParams withAutoResolution(Boolean autoResolution) {
        this.autoResolution = autoResolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=band")
    public GetNetworkWirelessClientCountHistoryBandEnum band;
    public GetNetworkWirelessClientCountHistoryQueryParams withBand(GetNetworkWirelessClientCountHistoryBandEnum band) {
        this.band = band;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public GetNetworkWirelessClientCountHistoryQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceSerial")
    public String deviceSerial;
    public GetNetworkWirelessClientCountHistoryQueryParams withDeviceSerial(String deviceSerial) {
        this.deviceSerial = deviceSerial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public Long resolution;
    public GetNetworkWirelessClientCountHistoryQueryParams withResolution(Long resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ssid")
    public Long ssid;
    public GetNetworkWirelessClientCountHistoryQueryParams withSsid(Long ssid) {
        this.ssid = ssid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkWirelessClientCountHistoryQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkWirelessClientCountHistoryQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkWirelessClientCountHistoryQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}