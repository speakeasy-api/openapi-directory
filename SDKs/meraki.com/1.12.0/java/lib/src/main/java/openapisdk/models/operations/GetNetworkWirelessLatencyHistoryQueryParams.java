package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessLatencyHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accessCategory")
    public GetNetworkWirelessLatencyHistoryAccessCategoryEnum accessCategory;
    public GetNetworkWirelessLatencyHistoryQueryParams withAccessCategory(GetNetworkWirelessLatencyHistoryAccessCategoryEnum accessCategory) {
        this.accessCategory = accessCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apTag")
    public String apTag;
    public GetNetworkWirelessLatencyHistoryQueryParams withApTag(String apTag) {
        this.apTag = apTag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=autoResolution")
    public Boolean autoResolution;
    public GetNetworkWirelessLatencyHistoryQueryParams withAutoResolution(Boolean autoResolution) {
        this.autoResolution = autoResolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=band")
    public GetNetworkWirelessLatencyHistoryBandEnum band;
    public GetNetworkWirelessLatencyHistoryQueryParams withBand(GetNetworkWirelessLatencyHistoryBandEnum band) {
        this.band = band;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public GetNetworkWirelessLatencyHistoryQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceSerial")
    public String deviceSerial;
    public GetNetworkWirelessLatencyHistoryQueryParams withDeviceSerial(String deviceSerial) {
        this.deviceSerial = deviceSerial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public Long resolution;
    public GetNetworkWirelessLatencyHistoryQueryParams withResolution(Long resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ssid")
    public Long ssid;
    public GetNetworkWirelessLatencyHistoryQueryParams withSsid(Long ssid) {
        this.ssid = ssid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkWirelessLatencyHistoryQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkWirelessLatencyHistoryQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkWirelessLatencyHistoryQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}