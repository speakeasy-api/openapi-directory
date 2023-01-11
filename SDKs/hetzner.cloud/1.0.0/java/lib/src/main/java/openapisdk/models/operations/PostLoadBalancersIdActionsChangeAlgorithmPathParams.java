package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoadBalancersIdActionsChangeAlgorithmPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostLoadBalancersIdActionsChangeAlgorithmPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}