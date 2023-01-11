package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancersIdMetricsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetLoadBalancersIdMetricsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}