package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetEventsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_id")
    public String endId;
    public GetEventsQueryParams withEndId(String endId) {
        this.endId = endId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=event_type")
    public String eventType;
    public GetEventsQueryParams withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public openapisdk.models.shared.OrderEnum order;
    public GetEventsQueryParams withOrder(openapisdk.models.shared.OrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetEventsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_id")
    public String startId;
    public GetEventsQueryParams withStartId(String startId) {
        this.startId = startId;
        return this;
    }
}