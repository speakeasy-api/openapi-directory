package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPackagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[name]")
    public String filterName;
    public ListPackagesQueryParams withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[summary]")
    public String filterSummary;
    public ListPackagesQueryParams withFilterSummary(String filterSummary) {
        this.filterSummary = filterSummary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_sids][in]")
    public String[] filterSystemProfileSapSidsIn;
    public ListPackagesQueryParams withFilterSystemProfileSapSidsIn(String[] filterSystemProfileSapSidsIn) {
        this.filterSystemProfileSapSidsIn = filterSystemProfileSapSidsIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_system]")
    public String filterSystemProfileSapSystem;
    public ListPackagesQueryParams withFilterSystemProfileSapSystem(String filterSystemProfileSapSystem) {
        this.filterSystemProfileSapSystem = filterSystemProfileSapSystem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[systems_installed]")
    public String filterSystemsInstalled;
    public ListPackagesQueryParams withFilterSystemsInstalled(String filterSystemsInstalled) {
        this.filterSystemsInstalled = filterSystemsInstalled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[systems_updatable]")
    public String filterSystemsUpdatable;
    public ListPackagesQueryParams withFilterSystemsUpdatable(String filterSystemsUpdatable) {
        this.filterSystemsUpdatable = filterSystemsUpdatable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListPackagesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListPackagesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ListPackagesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListPackagesSortEnum sort;
    public ListPackagesQueryParams withSort(ListPackagesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String[] tags;
    public ListPackagesQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}