package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedAfter")
    public OffsetDateTime dateCreatedAfter;
    public ListRecordingQueryParams withDateCreatedAfter(OffsetDateTime dateCreatedAfter) {
        this.dateCreatedAfter = dateCreatedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedBefore")
    public OffsetDateTime dateCreatedBefore;
    public ListRecordingQueryParams withDateCreatedBefore(OffsetDateTime dateCreatedBefore) {
        this.dateCreatedBefore = dateCreatedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupingSid")
    public String[] groupingSid;
    public ListRecordingQueryParams withGroupingSid(String[] groupingSid) {
        this.groupingSid = groupingSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MediaType")
    public openapisdk.models.shared.RecordingEnumTypeEnum mediaType;
    public ListRecordingQueryParams withMediaType(openapisdk.models.shared.RecordingEnumTypeEnum mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRecordingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceSid")
    public String sourceSid;
    public ListRecordingQueryParams withSourceSid(String sourceSid) {
        this.sourceSid = sourceSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.RecordingEnumStatusEnum status;
    public ListRecordingQueryParams withStatus(openapisdk.models.shared.RecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}