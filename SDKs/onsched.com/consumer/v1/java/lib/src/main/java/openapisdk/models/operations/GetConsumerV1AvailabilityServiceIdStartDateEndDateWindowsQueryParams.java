package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination")
    public String destination;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration")
    public Integer duration;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams withDuration(Integer duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public Integer interval;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceGroupId")
    public String resourceGroupId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams withResourceGroupId(String resourceGroupId) {
        this.resourceGroupId = resourceGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceId")
    public String resourceId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceIds")
    public String resourceIds;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams withResourceIds(String resourceIds) {
        this.resourceIds = resourceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roundRobin")
    public String roundRobin;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams withRoundRobin(String roundRobin) {
        this.roundRobin = roundRobin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tzOffset")
    public Integer tzOffset;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams withTzOffset(Integer tzOffset) {
        this.tzOffset = tzOffset;
        return this;
    }
}