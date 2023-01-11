package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListFaxQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedAfter")
    public OffsetDateTime dateCreatedAfter;
    public ListFaxQueryParams withDateCreatedAfter(OffsetDateTime dateCreatedAfter) {
        this.dateCreatedAfter = dateCreatedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedOnOrBefore")
    public OffsetDateTime dateCreatedOnOrBefore;
    public ListFaxQueryParams withDateCreatedOnOrBefore(OffsetDateTime dateCreatedOnOrBefore) {
        this.dateCreatedOnOrBefore = dateCreatedOnOrBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=From")
    public String from;
    public ListFaxQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListFaxQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=To")
    public String to;
    public ListFaxQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}