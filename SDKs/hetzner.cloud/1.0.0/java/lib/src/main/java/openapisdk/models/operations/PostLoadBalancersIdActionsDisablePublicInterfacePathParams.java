package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsDisablePublicInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostLoadBalancersIdActionsDisablePublicInterfacePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}