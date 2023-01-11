package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListExecutionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedFrom")
    public OffsetDateTime dateCreatedFrom;
    public ListExecutionQueryParams withDateCreatedFrom(OffsetDateTime dateCreatedFrom) {
        this.dateCreatedFrom = dateCreatedFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedTo")
    public OffsetDateTime dateCreatedTo;
    public ListExecutionQueryParams withDateCreatedTo(OffsetDateTime dateCreatedTo) {
        this.dateCreatedTo = dateCreatedTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListExecutionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}