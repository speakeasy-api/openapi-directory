package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SystemPackagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[description]")
    public String filterDescription;
    public SystemPackagesQueryParams withFilterDescription(String filterDescription) {
        this.filterDescription = filterDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[evra]")
    public String filterEvra;
    public SystemPackagesQueryParams withFilterEvra(String filterEvra) {
        this.filterEvra = filterEvra;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[name]")
    public String filterName;
    public SystemPackagesQueryParams withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[summary]")
    public String filterSummary;
    public SystemPackagesQueryParams withFilterSummary(String filterSummary) {
        this.filterSummary = filterSummary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[updatable]")
    public Boolean filterUpdatable;
    public SystemPackagesQueryParams withFilterUpdatable(Boolean filterUpdatable) {
        this.filterUpdatable = filterUpdatable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public SystemPackagesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public SystemPackagesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public SystemPackagesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}