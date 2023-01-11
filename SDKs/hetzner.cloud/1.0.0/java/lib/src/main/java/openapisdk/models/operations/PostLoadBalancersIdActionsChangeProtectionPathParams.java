package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsChangeProtectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostLoadBalancersIdActionsChangeProtectionPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}