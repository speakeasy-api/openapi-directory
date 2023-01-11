package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsRemoveTargetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostLoadBalancersIdActionsRemoveTargetPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}