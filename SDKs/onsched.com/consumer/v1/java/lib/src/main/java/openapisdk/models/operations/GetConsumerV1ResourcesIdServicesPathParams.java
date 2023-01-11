package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1ResourcesIdServicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetConsumerV1ResourcesIdServicesPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}