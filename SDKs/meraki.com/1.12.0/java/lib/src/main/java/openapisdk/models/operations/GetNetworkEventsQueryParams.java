package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientIp")
    public String clientIp;
    public GetNetworkEventsQueryParams withClientIp(String clientIp) {
        this.clientIp = clientIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientMac")
    public String clientMac;
    public GetNetworkEventsQueryParams withClientMac(String clientMac) {
        this.clientMac = clientMac;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientName")
    public String clientName;
    public GetNetworkEventsQueryParams withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceMac")
    public String deviceMac;
    public GetNetworkEventsQueryParams withDeviceMac(String deviceMac) {
        this.deviceMac = deviceMac;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceName")
    public String deviceName;
    public GetNetworkEventsQueryParams withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceSerial")
    public String deviceSerial;
    public GetNetworkEventsQueryParams withDeviceSerial(String deviceSerial) {
        this.deviceSerial = deviceSerial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetNetworkEventsQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=excludedEventTypes")
    public String[] excludedEventTypes;
    public GetNetworkEventsQueryParams withExcludedEventTypes(String[] excludedEventTypes) {
        this.excludedEventTypes = excludedEventTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=includedEventTypes")
    public String[] includedEventTypes;
    public GetNetworkEventsQueryParams withIncludedEventTypes(String[] includedEventTypes) {
        this.includedEventTypes = includedEventTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetNetworkEventsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=productType")
    public GetNetworkEventsProductTypeEnum productType;
    public GetNetworkEventsQueryParams withProductType(GetNetworkEventsProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=smDeviceMac")
    public String smDeviceMac;
    public GetNetworkEventsQueryParams withSmDeviceMac(String smDeviceMac) {
        this.smDeviceMac = smDeviceMac;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=smDeviceName")
    public String smDeviceName;
    public GetNetworkEventsQueryParams withSmDeviceName(String smDeviceName) {
        this.smDeviceName = smDeviceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetNetworkEventsQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
}