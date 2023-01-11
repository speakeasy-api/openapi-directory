package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListCallRecordingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated")
    public LocalDate dateCreated;
    public ListCallRecordingQueryParams withDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated<")
    public LocalDate dateCreatedLessThan;
    public ListCallRecordingQueryParams withDateCreatedLessThan(LocalDate dateCreatedLessThan) {
        this.dateCreatedLessThan = dateCreatedLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated>")
    public LocalDate dateCreatedGreaterThan;
    public ListCallRecordingQueryParams withDateCreatedGreaterThan(LocalDate dateCreatedGreaterThan) {
        this.dateCreatedGreaterThan = dateCreatedGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCallRecordingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}