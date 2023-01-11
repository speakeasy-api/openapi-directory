package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1ServicegroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetConsumerV1ServicegroupsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1ServicegroupsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetConsumerV1ServicegroupsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}