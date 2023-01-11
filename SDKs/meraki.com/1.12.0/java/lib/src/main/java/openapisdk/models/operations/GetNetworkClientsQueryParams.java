package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkClientsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public GetNetworkClientsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetNetworkClientsQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ip")
    public String ip;
    public GetNetworkClientsQueryParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ip6")
    public String ip6;
    public GetNetworkClientsQueryParams withIp6(String ip6) {
        this.ip6 = ip6;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ip6Local")
    public String ip6Local;
    public GetNetworkClientsQueryParams withIp6Local(String ip6Local) {
        this.ip6Local = ip6Local;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mac")
    public String mac;
    public GetNetworkClientsQueryParams withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=os")
    public String os;
    public GetNetworkClientsQueryParams withOs(String os) {
        this.os = os;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetNetworkClientsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=recentDeviceConnections")
    public GetNetworkClientsRecentDeviceConnectionsEnum[] recentDeviceConnections;
    public GetNetworkClientsQueryParams withRecentDeviceConnections(GetNetworkClientsRecentDeviceConnectionsEnum[] recentDeviceConnections) {
        this.recentDeviceConnections = recentDeviceConnections;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetNetworkClientsQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=statuses")
    public GetNetworkClientsStatusesEnum[] statuses;
    public GetNetworkClientsQueryParams withStatuses(GetNetworkClientsStatusesEnum[] statuses) {
        this.statuses = statuses;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkClientsQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkClientsQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}