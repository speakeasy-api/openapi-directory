package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLoadBalancersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutLoadBalancersIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}