package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessClientConnectivityEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=band")
    public GetNetworkWirelessClientConnectivityEventsBandEnum band;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withBand(GetNetworkWirelessClientConnectivityEventsBandEnum band) {
        this.band = band;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceSerial")
    public String deviceSerial;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withDeviceSerial(String deviceSerial) {
        this.deviceSerial = deviceSerial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=includedSeverities")
    public GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[] includedSeverities;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withIncludedSeverities(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[] includedSeverities) {
        this.includedSeverities = includedSeverities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ssidNumber")
    public Long ssidNumber;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withSsidNumber(Long ssidNumber) {
        this.ssidNumber = ssidNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=types")
    public GetNetworkWirelessClientConnectivityEventsTypesEnum[] types;
    public GetNetworkWirelessClientConnectivityEventsQueryParams withTypes(GetNetworkWirelessClientConnectivityEventsTypesEnum[] types) {
        this.types = types;
        return this;
    }
}