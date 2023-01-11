package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1ResourcesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetConsumerV1ResourcesIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}