package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWirelessUsageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=End")
    public String end;
    public FetchWirelessUsageQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Start")
    public String start;
    public FetchWirelessUsageQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}