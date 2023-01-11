package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessChannelUtilizationHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apTag")
    public String apTag;
    public GetNetworkWirelessChannelUtilizationHistoryQueryParams withApTag(String apTag) {
        this.apTag = apTag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=autoResolution")
    public Boolean autoResolution;
    public GetNetworkWirelessChannelUtilizationHistoryQueryParams withAutoResolution(Boolean autoResolution) {
        this.autoResolution = autoResolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=band")
    public GetNetworkWirelessChannelUtilizationHistoryBandEnum band;
    public GetNetworkWirelessChannelUtilizationHistoryQueryParams withBand(GetNetworkWirelessChannelUtilizationHistoryBandEnum band) {
        this.band = band;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;
    public GetNetworkWirelessChannelUtilizationHistoryQueryParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceSerial")
    public String deviceSerial;
    public GetNetworkWirelessChannelUtilizationHistoryQueryParams withDeviceSerial(String deviceSerial) {
        this.deviceSerial = deviceSerial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public Long resolution;
    public GetNetworkWirelessChannelUtilizationHistoryQueryParams withResolution(Long resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkWirelessChannelUtilizationHistoryQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkWirelessChannelUtilizationHistoryQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkWirelessChannelUtilizationHistoryQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}