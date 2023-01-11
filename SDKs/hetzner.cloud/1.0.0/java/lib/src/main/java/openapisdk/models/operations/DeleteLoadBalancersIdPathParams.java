package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLoadBalancersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteLoadBalancersIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}