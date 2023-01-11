package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1ServicesIdResourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetConsumerV1ServicesIdResourcesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}