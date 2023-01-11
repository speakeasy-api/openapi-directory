package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsAttachToNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostLoadBalancersIdActionsAttachToNetworkPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}