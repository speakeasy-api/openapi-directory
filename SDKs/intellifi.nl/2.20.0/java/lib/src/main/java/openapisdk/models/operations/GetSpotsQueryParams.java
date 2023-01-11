package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSpotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public OffsetDateTime after;
    public GetSpotsQueryParams withAfter(OffsetDateTime after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after_id")
    public String afterId;
    public GetSpotsQueryParams withAfterId(String afterId) {
        this.afterId = afterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetSpotsQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before_id")
    public String beforeId;
    public GetSpotsQueryParams withBeforeId(String beforeId) {
        this.beforeId = beforeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetSpotsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_id")
    public String fromId;
    public GetSpotsQueryParams withFromId(String fromId) {
        this.fromId = fromId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetSpotsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id_only")
    public Boolean idOnly;
    public GetSpotsQueryParams withIdOnly(Boolean idOnly) {
        this.idOnly = idOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_online")
    public Boolean isOnline;
    public GetSpotsQueryParams withIsOnline(Boolean isOnline) {
        this.isOnline = isOnline;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSpotsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=populate")
    public String populate;
    public GetSpotsQueryParams withPopulate(String populate) {
        this.populate = populate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request_counter")
    public Long requestCounter;
    public GetSpotsQueryParams withRequestCounter(Long requestCounter) {
        this.requestCounter = requestCounter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=results_only")
    public Boolean resultsOnly;
    public GetSpotsQueryParams withResultsOnly(Boolean resultsOnly) {
        this.resultsOnly = resultsOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=select")
    public String select;
    public GetSpotsQueryParams withSelect(String select) {
        this.select = select;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serial_number")
    public Long serialNumber;
    public GetSpotsQueryParams withSerialNumber(Long serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSpotsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_created")
    public String timeCreated;
    public GetSpotsQueryParams withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_updated")
    public String timeUpdated;
    public GetSpotsQueryParams withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout_s")
    public Double timeoutS;
    public GetSpotsQueryParams withTimeoutS(Double timeoutS) {
        this.timeoutS = timeoutS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public GetSpotsQueryParams withUntil(String until) {
        this.until = until;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until_id")
    public String untilId;
    public GetSpotsQueryParams withUntilId(String untilId) {
        this.untilId = untilId;
        return this;
    }
}