package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetBlobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public OffsetDateTime after;
    public GetBlobsQueryParams withAfter(OffsetDateTime after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after_id")
    public String afterId;
    public GetBlobsQueryParams withAfterId(String afterId) {
        this.afterId = afterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetBlobsQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before_id")
    public String beforeId;
    public GetBlobsQueryParams withBeforeId(String beforeId) {
        this.beforeId = beforeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=blob_key")
    public String blobKey;
    public GetBlobsQueryParams withBlobKey(String blobKey) {
        this.blobKey = blobKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content_type")
    public String contentType;
    public GetBlobsQueryParams withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filename")
    public String filename;
    public GetBlobsQueryParams withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetBlobsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_id")
    public String fromId;
    public GetBlobsQueryParams withFromId(String fromId) {
        this.fromId = fromId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hash")
    public String hash;
    public GetBlobsQueryParams withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetBlobsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id_only")
    public Boolean idOnly;
    public GetBlobsQueryParams withIdOnly(Boolean idOnly) {
        this.idOnly = idOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetBlobsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=populate")
    public String populate;
    public GetBlobsQueryParams withPopulate(String populate) {
        this.populate = populate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=results_only")
    public Boolean resultsOnly;
    public GetBlobsQueryParams withResultsOnly(Boolean resultsOnly) {
        this.resultsOnly = resultsOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=select")
    public String select;
    public GetBlobsQueryParams withSelect(String select) {
        this.select = select;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetBlobsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_created")
    public String timeCreated;
    public GetBlobsQueryParams withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_last_accessed")
    public String timeLastAccessed;
    public GetBlobsQueryParams withTimeLastAccessed(String timeLastAccessed) {
        this.timeLastAccessed = timeLastAccessed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_updated")
    public String timeUpdated;
    public GetBlobsQueryParams withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout_s")
    public Double timeoutS;
    public GetBlobsQueryParams withTimeoutS(Double timeoutS) {
        this.timeoutS = timeoutS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public GetBlobsQueryParams withUntil(String until) {
        this.until = until;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until_id")
    public String untilId;
    public GetBlobsQueryParams withUntilId(String untilId) {
        this.untilId = untilId;
        return this;
    }
}