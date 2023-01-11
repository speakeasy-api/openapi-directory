package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceId")
    public String resourceId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tzOffset")
    public Integer tzOffset;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams withTzOffset(Integer tzOffset) {
        this.tzOffset = tzOffset;
        return this;
    }
}