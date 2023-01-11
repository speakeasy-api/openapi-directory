package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServersIdMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetServersIdMetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetServersIdMetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=step")
    public String step;
    public GetServersIdMetricsQueryParams withStep(String step) {
        this.step = step;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetServersIdMetricsTypeEnum type;
    public GetServersIdMetricsQueryParams withType(GetServersIdMetricsTypeEnum type) {
        this.type = type;
        return this;
    }
}