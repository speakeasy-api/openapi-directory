package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkNetworkHealthChannelUtilizationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetNetworkNetworkHealthChannelUtilizationQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetNetworkNetworkHealthChannelUtilizationQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public Long resolution;
    public GetNetworkNetworkHealthChannelUtilizationQueryParams withResolution(Long resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetNetworkNetworkHealthChannelUtilizationQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkNetworkHealthChannelUtilizationQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkNetworkHealthChannelUtilizationQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkNetworkHealthChannelUtilizationQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}