package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SevenGetListOfPaymentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateFrom")
    public String dateFrom;
    public SevenGetListOfPaymentsQueryParams withDateFrom(String dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateTo")
    public String dateTo;
    public SevenGetListOfPaymentsQueryParams withDateTo(String dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public SevenGetListOfPaymentsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public String orderBy;
    public SevenGetListOfPaymentsQueryParams withOrderBy(String orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public SevenGetListOfPaymentsQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public String sortBy;
    public SevenGetListOfPaymentsQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
}