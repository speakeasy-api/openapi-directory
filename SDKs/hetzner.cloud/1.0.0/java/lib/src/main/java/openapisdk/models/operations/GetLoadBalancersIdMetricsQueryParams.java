package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancersIdMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetLoadBalancersIdMetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetLoadBalancersIdMetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=step")
    public String step;
    public GetLoadBalancersIdMetricsQueryParams withStep(String step) {
        this.step = step;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetLoadBalancersIdMetricsTypeEnum type;
    public GetLoadBalancersIdMetricsQueryParams withType(GetLoadBalancersIdMetricsTypeEnum type) {
        this.type = type;
        return this;
    }
}