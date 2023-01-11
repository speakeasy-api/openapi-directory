package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1LocationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetConsumerV1LocationsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}