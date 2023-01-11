package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dayAvailability")
    public Integer dayAvailability;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withDayAvailability(Integer dayAvailability) {
        this.dayAvailability = dayAvailability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dayAvailabilityStartDate")
    public OffsetDateTime dayAvailabilityStartDate;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withDayAvailabilityStartDate(OffsetDateTime dayAvailabilityStartDate) {
        this.dayAvailabilityStartDate = dayAvailabilityStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination")
    public String destination;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration")
    public Integer duration;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withDuration(Integer duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public Integer endTime;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withEndTime(Integer endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=firstDayAvailable")
    public Boolean firstDayAvailable;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withFirstDayAvailable(Boolean firstDayAvailable) {
        this.firstDayAvailable = firstDayAvailable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public Integer interval;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceGroupId")
    public String resourceGroupId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withResourceGroupId(String resourceGroupId) {
        this.resourceGroupId = resourceGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceId")
    public String resourceId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceIds")
    public String resourceIds;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withResourceIds(String resourceIds) {
        this.resourceIds = resourceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roundRobin")
    public String roundRobin;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withRoundRobin(String roundRobin) {
        this.roundRobin = roundRobin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public Integer startTime;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withStartTime(Integer startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tzOffset")
    public Integer tzOffset;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams withTzOffset(Integer tzOffset) {
        this.tzOffset = tzOffset;
        return this;
    }
}