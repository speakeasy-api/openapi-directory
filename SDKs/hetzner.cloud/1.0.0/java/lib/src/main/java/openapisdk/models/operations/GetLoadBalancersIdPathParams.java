package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetLoadBalancersIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}