package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1ServicesIdAllocationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public OffsetDateTime endDate;
    public GetConsumerV1ServicesIdAllocationsQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetConsumerV1ServicesIdAllocationsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1ServicesIdAllocationsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetConsumerV1ServicesIdAllocationsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceId")
    public String resourceId;
    public GetConsumerV1ServicesIdAllocationsQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public OffsetDateTime startDate;
    public GetConsumerV1ServicesIdAllocationsQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
}