package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1CustomersPlansIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetConsumerV1CustomersPlansIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}