package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListEventQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ActorSid")
    public String actorSid;
    public ListEventQueryParams withActorSid(String actorSid) {
        this.actorSid = actorSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public OffsetDateTime endDate;
    public ListEventQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EventType")
    public String eventType;
    public ListEventQueryParams withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListEventQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceSid")
    public String resourceSid;
    public ListEventQueryParams withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceIpAddress")
    public String sourceIpAddress;
    public ListEventQueryParams withSourceIpAddress(String sourceIpAddress) {
        this.sourceIpAddress = sourceIpAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public OffsetDateTime startDate;
    public ListEventQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
}