package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSystemAdvisoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[advisory_type]")
    public String filterAdvisoryType;
    public ListSystemAdvisoriesQueryParams withFilterAdvisoryType(String filterAdvisoryType) {
        this.filterAdvisoryType = filterAdvisoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[description]")
    public String filterDescription;
    public ListSystemAdvisoriesQueryParams withFilterDescription(String filterDescription) {
        this.filterDescription = filterDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[id]")
    public String filterId;
    public ListSystemAdvisoriesQueryParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[public_date]")
    public String filterPublicDate;
    public ListSystemAdvisoriesQueryParams withFilterPublicDate(String filterPublicDate) {
        this.filterPublicDate = filterPublicDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[severity]")
    public String filterSeverity;
    public ListSystemAdvisoriesQueryParams withFilterSeverity(String filterSeverity) {
        this.filterSeverity = filterSeverity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[synopsis]")
    public String filterSynopsis;
    public ListSystemAdvisoriesQueryParams withFilterSynopsis(String filterSynopsis) {
        this.filterSynopsis = filterSynopsis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListSystemAdvisoriesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListSystemAdvisoriesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ListSystemAdvisoriesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListSystemAdvisoriesSortEnum sort;
    public ListSystemAdvisoriesQueryParams withSort(ListSystemAdvisoriesSortEnum sort) {
        this.sort = sort;
        return this;
    }
}