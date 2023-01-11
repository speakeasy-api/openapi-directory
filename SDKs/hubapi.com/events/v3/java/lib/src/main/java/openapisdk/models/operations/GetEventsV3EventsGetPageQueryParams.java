package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsV3EventsGetPageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public GetEventsV3EventsGetPageQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetEventsV3EventsGetPageQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventType")
    public String eventType;
    public GetEventsV3EventsGetPageQueryParams withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetEventsV3EventsGetPageQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=objectId")
    public Long objectId;
    public GetEventsV3EventsGetPageQueryParams withObjectId(Long objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=objectType")
    public String objectType;
    public GetEventsV3EventsGetPageQueryParams withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurredAfter")
    public OffsetDateTime occurredAfter;
    public GetEventsV3EventsGetPageQueryParams withOccurredAfter(OffsetDateTime occurredAfter) {
        this.occurredAfter = occurredAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurredBefore")
    public OffsetDateTime occurredBefore;
    public GetEventsV3EventsGetPageQueryParams withOccurredBefore(OffsetDateTime occurredBefore) {
        this.occurredBefore = occurredBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String[] sort;
    public GetEventsV3EventsGetPageQueryParams withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
}