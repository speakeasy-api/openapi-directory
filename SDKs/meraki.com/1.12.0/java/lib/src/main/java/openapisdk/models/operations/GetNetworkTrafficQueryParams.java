package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkTrafficQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceType")
    public GetNetworkTrafficDeviceTypeEnum deviceType;
    public GetNetworkTrafficQueryParams withDeviceType(GetNetworkTrafficDeviceTypeEnum deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkTrafficQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkTrafficQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}