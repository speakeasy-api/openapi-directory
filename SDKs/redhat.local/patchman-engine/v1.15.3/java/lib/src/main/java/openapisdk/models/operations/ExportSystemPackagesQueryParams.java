package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSystemPackagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[description]")
    public String filterDescription;
    public ExportSystemPackagesQueryParams withFilterDescription(String filterDescription) {
        this.filterDescription = filterDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[evra]")
    public String filterEvra;
    public ExportSystemPackagesQueryParams withFilterEvra(String filterEvra) {
        this.filterEvra = filterEvra;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[name]")
    public String filterName;
    public ExportSystemPackagesQueryParams withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[summary]")
    public String filterSummary;
    public ExportSystemPackagesQueryParams withFilterSummary(String filterSummary) {
        this.filterSummary = filterSummary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[updatable]")
    public Boolean filterUpdatable;
    public ExportSystemPackagesQueryParams withFilterUpdatable(Boolean filterUpdatable) {
        this.filterUpdatable = filterUpdatable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportSystemPackagesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}