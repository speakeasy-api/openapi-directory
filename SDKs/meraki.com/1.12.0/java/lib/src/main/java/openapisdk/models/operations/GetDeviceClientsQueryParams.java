package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceClientsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetDeviceClientsQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetDeviceClientsQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}