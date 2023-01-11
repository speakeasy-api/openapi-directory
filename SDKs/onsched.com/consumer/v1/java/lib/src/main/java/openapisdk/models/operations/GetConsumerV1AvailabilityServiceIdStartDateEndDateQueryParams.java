package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dayAvailability")
    public Integer dayAvailability;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withDayAvailability(Integer dayAvailability) {
        this.dayAvailability = dayAvailability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dayAvailabilityStartDate")
    public OffsetDateTime dayAvailabilityStartDate;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withDayAvailabilityStartDate(OffsetDateTime dayAvailabilityStartDate) {
        this.dayAvailabilityStartDate = dayAvailabilityStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination")
    public String destination;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration")
    public Integer duration;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withDuration(Integer duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public Integer endTime;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withEndTime(Integer endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=firstDayAvailable")
    public Boolean firstDayAvailable;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withFirstDayAvailable(Boolean firstDayAvailable) {
        this.firstDayAvailable = firstDayAvailable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fullServerBasedAvailability")
    public Boolean fullServerBasedAvailability;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withFullServerBasedAvailability(Boolean fullServerBasedAvailability) {
        this.fullServerBasedAvailability = fullServerBasedAvailability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public Integer interval;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceGroupId")
    public String resourceGroupId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withResourceGroupId(String resourceGroupId) {
        this.resourceGroupId = resourceGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceId")
    public String resourceId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceIds")
    public String resourceIds;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withResourceIds(String resourceIds) {
        this.resourceIds = resourceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roundRobin")
    public String roundRobin;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withRoundRobin(String roundRobin) {
        this.roundRobin = roundRobin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public Integer startTime;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withStartTime(Integer startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tzOffset")
    public Integer tzOffset;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams withTzOffset(Integer tzOffset) {
        this.tzOffset = tzOffset;
        return this;
    }
}