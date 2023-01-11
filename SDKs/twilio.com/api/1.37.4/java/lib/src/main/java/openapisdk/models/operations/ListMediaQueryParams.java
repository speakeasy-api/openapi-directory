package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated")
    public OffsetDateTime dateCreated;
    public ListMediaQueryParams withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated<")
    public OffsetDateTime dateCreatedLessThan;
    public ListMediaQueryParams withDateCreatedLessThan(OffsetDateTime dateCreatedLessThan) {
        this.dateCreatedLessThan = dateCreatedLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated>")
    public OffsetDateTime dateCreatedGreaterThan;
    public ListMediaQueryParams withDateCreatedGreaterThan(OffsetDateTime dateCreatedGreaterThan) {
        this.dateCreatedGreaterThan = dateCreatedGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMediaQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}