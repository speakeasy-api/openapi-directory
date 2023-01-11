package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsUpdateServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostLoadBalancersIdActionsUpdateServicePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}