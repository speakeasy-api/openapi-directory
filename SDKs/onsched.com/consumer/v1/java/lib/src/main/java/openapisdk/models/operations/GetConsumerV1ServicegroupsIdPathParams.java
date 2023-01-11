package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1ServicegroupsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetConsumerV1ServicegroupsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}