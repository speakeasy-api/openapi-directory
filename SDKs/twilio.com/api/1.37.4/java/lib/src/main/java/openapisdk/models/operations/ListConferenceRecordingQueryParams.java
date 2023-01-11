package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListConferenceRecordingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated")
    public LocalDate dateCreated;
    public ListConferenceRecordingQueryParams withDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated<")
    public LocalDate dateCreatedLessThan;
    public ListConferenceRecordingQueryParams withDateCreatedLessThan(LocalDate dateCreatedLessThan) {
        this.dateCreatedLessThan = dateCreatedLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated>")
    public LocalDate dateCreatedGreaterThan;
    public ListConferenceRecordingQueryParams withDateCreatedGreaterThan(LocalDate dateCreatedGreaterThan) {
        this.dateCreatedGreaterThan = dateCreatedGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConferenceRecordingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}