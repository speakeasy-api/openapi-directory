package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportPackagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[name]")
    public String filterName;
    public ExportPackagesQueryParams withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[summary]")
    public String filterSummary;
    public ExportPackagesQueryParams withFilterSummary(String filterSummary) {
        this.filterSummary = filterSummary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[systems_installed]")
    public String filterSystemsInstalled;
    public ExportPackagesQueryParams withFilterSystemsInstalled(String filterSystemsInstalled) {
        this.filterSystemsInstalled = filterSystemsInstalled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[systems_updatable]")
    public String filterSystemsUpdatable;
    public ExportPackagesQueryParams withFilterSystemsUpdatable(String filterSystemsUpdatable) {
        this.filterSystemsUpdatable = filterSystemsUpdatable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportPackagesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ExportPackagesSortEnum sort;
    public ExportPackagesQueryParams withSort(ExportPackagesSortEnum sort) {
        this.sort = sort;
        return this;
    }
}