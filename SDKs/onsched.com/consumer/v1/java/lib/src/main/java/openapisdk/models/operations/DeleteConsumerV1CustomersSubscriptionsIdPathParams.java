package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConsumerV1CustomersSubscriptionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteConsumerV1CustomersSubscriptionsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}