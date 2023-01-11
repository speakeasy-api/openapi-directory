package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public OffsetDateTime after;
    public GetEventsQueryParams withAfter(OffsetDateTime after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after_id")
    public String afterId;
    public GetEventsQueryParams withAfterId(String afterId) {
        this.afterId = afterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetEventsQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before_id")
    public String beforeId;
    public GetEventsQueryParams withBeforeId(String beforeId) {
        this.beforeId = beforeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetEventsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_id")
    public String fromId;
    public GetEventsQueryParams withFromId(String fromId) {
        this.fromId = fromId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetEventsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id_only")
    public Boolean idOnly;
    public GetEventsQueryParams withIdOnly(Boolean idOnly) {
        this.idOnly = idOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetEventsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=populate")
    public String populate;
    public GetEventsQueryParams withPopulate(String populate) {
        this.populate = populate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=results_only")
    public Boolean resultsOnly;
    public GetEventsQueryParams withResultsOnly(Boolean resultsOnly) {
        this.resultsOnly = resultsOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetEventsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_created")
    public String timeCreated;
    public GetEventsQueryParams withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_event")
    public String timeEvent;
    public GetEventsQueryParams withTimeEvent(String timeEvent) {
        this.timeEvent = timeEvent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_expire")
    public String timeExpire;
    public GetEventsQueryParams withTimeExpire(String timeExpire) {
        this.timeExpire = timeExpire;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout_s")
    public Double timeoutS;
    public GetEventsQueryParams withTimeoutS(Double timeoutS) {
        this.timeoutS = timeoutS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topic.action")
    public openapisdk.models.shared.EventTopicActionEnum topicAction;
    public GetEventsQueryParams withTopicAction(openapisdk.models.shared.EventTopicActionEnum topicAction) {
        this.topicAction = topicAction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topic.resource")
    public String topicResource;
    public GetEventsQueryParams withTopicResource(String topicResource) {
        this.topicResource = topicResource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topic.resource_type")
    public openapisdk.models.shared.EventTopicResourceTypeEnum topicResourceType;
    public GetEventsQueryParams withTopicResourceType(openapisdk.models.shared.EventTopicResourceTypeEnum topicResourceType) {
        this.topicResourceType = topicResourceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public GetEventsQueryParams withUntil(String until) {
        this.until = until;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until_id")
    public String untilId;
    public GetEventsQueryParams withUntilId(String untilId) {
        this.untilId = untilId;
        return this;
    }
}