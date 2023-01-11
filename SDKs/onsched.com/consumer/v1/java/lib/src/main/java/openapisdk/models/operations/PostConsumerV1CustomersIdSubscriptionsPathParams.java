package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConsumerV1CustomersIdSubscriptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostConsumerV1CustomersIdSubscriptionsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}