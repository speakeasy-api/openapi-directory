package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CallSid")
    public String callSid;
    public ListRecordingQueryParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConferenceSid")
    public String conferenceSid;
    public ListRecordingQueryParams withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated")
    public OffsetDateTime dateCreated;
    public ListRecordingQueryParams withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated<")
    public OffsetDateTime dateCreatedLessThan;
    public ListRecordingQueryParams withDateCreatedLessThan(OffsetDateTime dateCreatedLessThan) {
        this.dateCreatedLessThan = dateCreatedLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated>")
    public OffsetDateTime dateCreatedGreaterThan;
    public ListRecordingQueryParams withDateCreatedGreaterThan(OffsetDateTime dateCreatedGreaterThan) {
        this.dateCreatedGreaterThan = dateCreatedGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeSoftDeleted")
    public Boolean includeSoftDeleted;
    public ListRecordingQueryParams withIncludeSoftDeleted(Boolean includeSoftDeleted) {
        this.includeSoftDeleted = includeSoftDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRecordingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}