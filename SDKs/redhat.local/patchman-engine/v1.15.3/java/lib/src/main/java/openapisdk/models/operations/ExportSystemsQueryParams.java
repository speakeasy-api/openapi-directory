package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSystemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[display_name]")
    public String filterDisplayName;
    public ExportSystemsQueryParams withFilterDisplayName(String filterDisplayName) {
        this.filterDisplayName = filterDisplayName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[id]")
    public String filterId;
    public ExportSystemsQueryParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[last_evaluation]")
    public String filterLastEvaluation;
    public ExportSystemsQueryParams withFilterLastEvaluation(String filterLastEvaluation) {
        this.filterLastEvaluation = filterLastEvaluation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[last_upload]")
    public String filterLastUpload;
    public ExportSystemsQueryParams withFilterLastUpload(String filterLastUpload) {
        this.filterLastUpload = filterLastUpload;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[other_count]")
    public String filterOtherCount;
    public ExportSystemsQueryParams withFilterOtherCount(String filterOtherCount) {
        this.filterOtherCount = filterOtherCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[packages_installed]")
    public String filterPackagesInstalled;
    public ExportSystemsQueryParams withFilterPackagesInstalled(String filterPackagesInstalled) {
        this.filterPackagesInstalled = filterPackagesInstalled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[packages_updatable]")
    public String filterPackagesUpdatable;
    public ExportSystemsQueryParams withFilterPackagesUpdatable(String filterPackagesUpdatable) {
        this.filterPackagesUpdatable = filterPackagesUpdatable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhba_count]")
    public String filterRhbaCount;
    public ExportSystemsQueryParams withFilterRhbaCount(String filterRhbaCount) {
        this.filterRhbaCount = filterRhbaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhea_count]")
    public String filterRheaCount;
    public ExportSystemsQueryParams withFilterRheaCount(String filterRheaCount) {
        this.filterRheaCount = filterRheaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhsa_count]")
    public String filterRhsaCount;
    public ExportSystemsQueryParams withFilterRhsaCount(String filterRhsaCount) {
        this.filterRhsaCount = filterRhsaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[stale]")
    public String filterStale;
    public ExportSystemsQueryParams withFilterStale(String filterStale) {
        this.filterStale = filterStale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_sids][in]")
    public String[] filterSystemProfileSapSidsIn;
    public ExportSystemsQueryParams withFilterSystemProfileSapSidsIn(String[] filterSystemProfileSapSidsIn) {
        this.filterSystemProfileSapSidsIn = filterSystemProfileSapSidsIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_system]")
    public String filterSystemProfileSapSystem;
    public ExportSystemsQueryParams withFilterSystemProfileSapSystem(String filterSystemProfileSapSystem) {
        this.filterSystemProfileSapSystem = filterSystemProfileSapSystem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportSystemsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String[] tags;
    public ExportSystemsQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}