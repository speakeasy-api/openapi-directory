package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConsumerV1CustomersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteConsumerV1CustomersIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}