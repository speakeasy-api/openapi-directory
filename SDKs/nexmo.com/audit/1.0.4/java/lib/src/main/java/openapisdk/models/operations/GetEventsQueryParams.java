package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_from")
    public String dateFrom;
    public GetEventsQueryParams withDateFrom(String dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_to")
    public String dateTo;
    public GetEventsQueryParams withDateTo(String dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=event_type")
    public openapisdk.models.shared.EventTypesEnum eventType;
    public GetEventsQueryParams withEventType(openapisdk.models.shared.EventTypesEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetEventsQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_text")
    public String searchText;
    public GetEventsQueryParams withSearchText(String searchText) {
        this.searchText = searchText;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetEventsQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
}