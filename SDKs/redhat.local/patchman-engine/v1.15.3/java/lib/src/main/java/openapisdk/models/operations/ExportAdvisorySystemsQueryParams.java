package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAdvisorySystemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[display_name]")
    public String filterDisplayName;
    public ExportAdvisorySystemsQueryParams withFilterDisplayName(String filterDisplayName) {
        this.filterDisplayName = filterDisplayName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[id]")
    public String filterId;
    public ExportAdvisorySystemsQueryParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[last_evaluation]")
    public String filterLastEvaluation;
    public ExportAdvisorySystemsQueryParams withFilterLastEvaluation(String filterLastEvaluation) {
        this.filterLastEvaluation = filterLastEvaluation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[last_upload]")
    public String filterLastUpload;
    public ExportAdvisorySystemsQueryParams withFilterLastUpload(String filterLastUpload) {
        this.filterLastUpload = filterLastUpload;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[other_count]")
    public String filterOtherCount;
    public ExportAdvisorySystemsQueryParams withFilterOtherCount(String filterOtherCount) {
        this.filterOtherCount = filterOtherCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[packages_installed]")
    public String filterPackagesInstalled;
    public ExportAdvisorySystemsQueryParams withFilterPackagesInstalled(String filterPackagesInstalled) {
        this.filterPackagesInstalled = filterPackagesInstalled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[packages_updatable]")
    public String filterPackagesUpdatable;
    public ExportAdvisorySystemsQueryParams withFilterPackagesUpdatable(String filterPackagesUpdatable) {
        this.filterPackagesUpdatable = filterPackagesUpdatable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhba_count]")
    public String filterRhbaCount;
    public ExportAdvisorySystemsQueryParams withFilterRhbaCount(String filterRhbaCount) {
        this.filterRhbaCount = filterRhbaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhea_count]")
    public String filterRheaCount;
    public ExportAdvisorySystemsQueryParams withFilterRheaCount(String filterRheaCount) {
        this.filterRheaCount = filterRheaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhsa_count]")
    public String filterRhsaCount;
    public ExportAdvisorySystemsQueryParams withFilterRhsaCount(String filterRhsaCount) {
        this.filterRhsaCount = filterRhsaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[stale]")
    public String filterStale;
    public ExportAdvisorySystemsQueryParams withFilterStale(String filterStale) {
        this.filterStale = filterStale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_sids][in]")
    public String[] filterSystemProfileSapSidsIn;
    public ExportAdvisorySystemsQueryParams withFilterSystemProfileSapSidsIn(String[] filterSystemProfileSapSidsIn) {
        this.filterSystemProfileSapSidsIn = filterSystemProfileSapSidsIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_system]")
    public String filterSystemProfileSapSystem;
    public ExportAdvisorySystemsQueryParams withFilterSystemProfileSapSystem(String filterSystemProfileSapSystem) {
        this.filterSystemProfileSapSystem = filterSystemProfileSapSystem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportAdvisorySystemsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String[] tags;
    public ExportAdvisorySystemsQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}