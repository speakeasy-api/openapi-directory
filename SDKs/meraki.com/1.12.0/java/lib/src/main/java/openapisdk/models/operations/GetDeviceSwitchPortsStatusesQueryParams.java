package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceSwitchPortsStatusesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetDeviceSwitchPortsStatusesQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetDeviceSwitchPortsStatusesQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}