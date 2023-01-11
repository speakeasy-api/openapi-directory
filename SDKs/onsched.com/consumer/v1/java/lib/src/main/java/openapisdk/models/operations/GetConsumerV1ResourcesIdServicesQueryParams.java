package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1ResourcesIdServicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetConsumerV1ResourcesIdServicesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetConsumerV1ResourcesIdServicesQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}