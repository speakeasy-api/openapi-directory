package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsForSubscriptionByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public OffsetDateTime after;
    public GetEventsForSubscriptionByIdQueryParams withAfter(OffsetDateTime after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after_id")
    public String afterId;
    public GetEventsForSubscriptionByIdQueryParams withAfterId(String afterId) {
        this.afterId = afterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetEventsForSubscriptionByIdQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before_id")
    public String beforeId;
    public GetEventsForSubscriptionByIdQueryParams withBeforeId(String beforeId) {
        this.beforeId = beforeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetEventsForSubscriptionByIdQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_id")
    public String fromId;
    public GetEventsForSubscriptionByIdQueryParams withFromId(String fromId) {
        this.fromId = fromId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetEventsForSubscriptionByIdQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id_only")
    public Boolean idOnly;
    public GetEventsForSubscriptionByIdQueryParams withIdOnly(Boolean idOnly) {
        this.idOnly = idOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetEventsForSubscriptionByIdQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=populate")
    public String populate;
    public GetEventsForSubscriptionByIdQueryParams withPopulate(String populate) {
        this.populate = populate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=results_only")
    public Boolean resultsOnly;
    public GetEventsForSubscriptionByIdQueryParams withResultsOnly(Boolean resultsOnly) {
        this.resultsOnly = resultsOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=select")
    public String select;
    public GetEventsForSubscriptionByIdQueryParams withSelect(String select) {
        this.select = select;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetEventsForSubscriptionByIdQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_created")
    public String timeCreated;
    public GetEventsForSubscriptionByIdQueryParams withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_event")
    public String timeEvent;
    public GetEventsForSubscriptionByIdQueryParams withTimeEvent(String timeEvent) {
        this.timeEvent = timeEvent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_expire")
    public String timeExpire;
    public GetEventsForSubscriptionByIdQueryParams withTimeExpire(String timeExpire) {
        this.timeExpire = timeExpire;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout_s")
    public Double timeoutS;
    public GetEventsForSubscriptionByIdQueryParams withTimeoutS(Double timeoutS) {
        this.timeoutS = timeoutS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topic.action")
    public openapisdk.models.shared.EventTopicActionEnum topicAction;
    public GetEventsForSubscriptionByIdQueryParams withTopicAction(openapisdk.models.shared.EventTopicActionEnum topicAction) {
        this.topicAction = topicAction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topic.resource")
    public String topicResource;
    public GetEventsForSubscriptionByIdQueryParams withTopicResource(String topicResource) {
        this.topicResource = topicResource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topic.resource_type")
    public openapisdk.models.shared.EventTopicResourceTypeEnum topicResourceType;
    public GetEventsForSubscriptionByIdQueryParams withTopicResourceType(openapisdk.models.shared.EventTopicResourceTypeEnum topicResourceType) {
        this.topicResourceType = topicResourceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public GetEventsForSubscriptionByIdQueryParams withUntil(String until) {
        this.until = until;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until_id")
    public String untilId;
    public GetEventsForSubscriptionByIdQueryParams withUntilId(String untilId) {
        this.untilId = untilId;
        return this;
    }
}