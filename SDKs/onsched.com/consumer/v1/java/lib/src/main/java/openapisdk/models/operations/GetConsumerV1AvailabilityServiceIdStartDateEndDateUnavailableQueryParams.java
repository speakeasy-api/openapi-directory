package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration")
    public Integer duration;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams withDuration(Integer duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fullServerBasedAvailability")
    public Boolean fullServerBasedAvailability;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams withFullServerBasedAvailability(Boolean fullServerBasedAvailability) {
        this.fullServerBasedAvailability = fullServerBasedAvailability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceId")
    public String resourceId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tzOffset")
    public Integer tzOffset;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams withTzOffset(Integer tzOffset) {
        this.tzOffset = tzOffset;
        return this;
    }
}