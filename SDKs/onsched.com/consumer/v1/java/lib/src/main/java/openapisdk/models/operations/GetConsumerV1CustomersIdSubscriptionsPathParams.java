package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1CustomersIdSubscriptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetConsumerV1CustomersIdSubscriptionsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}