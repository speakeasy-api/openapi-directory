package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public OffsetDateTime after;
    public GetSubscriptionsQueryParams withAfter(OffsetDateTime after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after_id")
    public String afterId;
    public GetSubscriptionsQueryParams withAfterId(String afterId) {
        this.afterId = afterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetSubscriptionsQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before_id")
    public String beforeId;
    public GetSubscriptionsQueryParams withBeforeId(String beforeId) {
        this.beforeId = beforeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=database_hold_time_h")
    public Long databaseHoldTimeH;
    public GetSubscriptionsQueryParams withDatabaseHoldTimeH(Long databaseHoldTimeH) {
        this.databaseHoldTimeH = databaseHoldTimeH;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public GetSubscriptionsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetSubscriptionsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_id")
    public String fromId;
    public GetSubscriptionsQueryParams withFromId(String fromId) {
        this.fromId = fromId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetSubscriptionsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id_only")
    public Boolean idOnly;
    public GetSubscriptionsQueryParams withIdOnly(Boolean idOnly) {
        this.idOnly = idOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSubscriptionsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=populate")
    public String populate;
    public GetSubscriptionsQueryParams withPopulate(String populate) {
        this.populate = populate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=populate_events")
    public Boolean populateEvents;
    public GetSubscriptionsQueryParams withPopulateEvents(Boolean populateEvents) {
        this.populateEvents = populateEvents;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=results_only")
    public Boolean resultsOnly;
    public GetSubscriptionsQueryParams withResultsOnly(Boolean resultsOnly) {
        this.resultsOnly = resultsOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=select")
    public String select;
    public GetSubscriptionsQueryParams withSelect(String select) {
        this.select = select;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSubscriptionsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_created")
    public String timeCreated;
    public GetSubscriptionsQueryParams withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_updated")
    public String timeUpdated;
    public GetSubscriptionsQueryParams withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout_s")
    public Double timeoutS;
    public GetSubscriptionsQueryParams withTimeoutS(Double timeoutS) {
        this.timeoutS = timeoutS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topic_filter")
    public String topicFilter;
    public GetSubscriptionsQueryParams withTopicFilter(String topicFilter) {
        this.topicFilter = topicFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public GetSubscriptionsQueryParams withUntil(String until) {
        this.until = until;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until_id")
    public String untilId;
    public GetSubscriptionsQueryParams withUntilId(String untilId) {
        this.untilId = untilId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=verify_target_certificate")
    public Boolean verifyTargetCertificate;
    public GetSubscriptionsQueryParams withVerifyTargetCertificate(Boolean verifyTargetCertificate) {
        this.verifyTargetCertificate = verifyTargetCertificate;
        return this;
    }
}