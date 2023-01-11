package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=area_id")
    public String areaId;
    public GetEventsQueryParams withAreaId(String areaId) {
        this.areaId = areaId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bbox")
    public String bbox;
    public GetEventsQueryParams withBbox(String bbox) {
        this.bbox = bbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created")
    public String created;
    public GetEventsQueryParams withCreated(String created) {
        this.created = created;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=event_type")
    public GetEventsEventTypeEnum eventType;
    public GetEventsQueryParams withEventType(GetEventsEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetEventsFormatEnum format;
    public GetEventsQueryParams withFormat(GetEventsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jurisdiction")
    public String jurisdiction;
    public GetEventsQueryParams withJurisdiction(String jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=road_name")
    public String roadName;
    public GetEventsQueryParams withRoadName(String roadName) {
        this.roadName = roadName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=severity")
    public String severity;
    public GetEventsQueryParams withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetEventsStatusEnum status;
    public GetEventsQueryParams withStatus(GetEventsStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updated")
    public String updated;
    public GetEventsQueryParams withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
}