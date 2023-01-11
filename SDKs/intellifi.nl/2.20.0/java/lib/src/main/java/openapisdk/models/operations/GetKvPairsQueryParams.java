package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetKvPairsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public OffsetDateTime after;
    public GetKvPairsQueryParams withAfter(OffsetDateTime after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after_id")
    public String afterId;
    public GetKvPairsQueryParams withAfterId(String afterId) {
        this.afterId = afterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetKvPairsQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before_id")
    public String beforeId;
    public GetKvPairsQueryParams withBeforeId(String beforeId) {
        this.beforeId = beforeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetKvPairsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_id")
    public String fromId;
    public GetKvPairsQueryParams withFromId(String fromId) {
        this.fromId = fromId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetKvPairsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id_only")
    public Boolean idOnly;
    public GetKvPairsQueryParams withIdOnly(Boolean idOnly) {
        this.idOnly = idOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=kv_key")
    public String kvKey;
    public GetKvPairsQueryParams withKvKey(String kvKey) {
        this.kvKey = kvKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetKvPairsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=populate")
    public String populate;
    public GetKvPairsQueryParams withPopulate(String populate) {
        this.populate = populate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=results_only")
    public Boolean resultsOnly;
    public GetKvPairsQueryParams withResultsOnly(Boolean resultsOnly) {
        this.resultsOnly = resultsOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=select")
    public String select;
    public GetKvPairsQueryParams withSelect(String select) {
        this.select = select;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetKvPairsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_created")
    public String timeCreated;
    public GetKvPairsQueryParams withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_updated")
    public String timeUpdated;
    public GetKvPairsQueryParams withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout_s")
    public Double timeoutS;
    public GetKvPairsQueryParams withTimeoutS(Double timeoutS) {
        this.timeoutS = timeoutS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public GetKvPairsQueryParams withUntil(String until) {
        this.until = until;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until_id")
    public String untilId;
    public GetKvPairsQueryParams withUntilId(String untilId) {
        this.untilId = untilId;
        return this;
    }
}