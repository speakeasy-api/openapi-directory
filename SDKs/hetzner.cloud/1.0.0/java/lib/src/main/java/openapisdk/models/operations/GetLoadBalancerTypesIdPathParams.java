package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancerTypesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetLoadBalancerTypesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}