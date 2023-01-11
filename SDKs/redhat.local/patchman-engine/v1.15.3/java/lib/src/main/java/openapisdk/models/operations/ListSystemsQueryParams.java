package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSystemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[created]")
    public String filterCreated;
    public ListSystemsQueryParams withFilterCreated(String filterCreated) {
        this.filterCreated = filterCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[culled_timestamp]")
    public String filterCulledTimestamp;
    public ListSystemsQueryParams withFilterCulledTimestamp(String filterCulledTimestamp) {
        this.filterCulledTimestamp = filterCulledTimestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[display_name]")
    public String filterDisplayName;
    public ListSystemsQueryParams withFilterDisplayName(String filterDisplayName) {
        this.filterDisplayName = filterDisplayName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[id]")
    public String filterId;
    public ListSystemsQueryParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[insights_id]")
    public String filterInsightsId;
    public ListSystemsQueryParams withFilterInsightsId(String filterInsightsId) {
        this.filterInsightsId = filterInsightsId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[last_evaluation]")
    public String filterLastEvaluation;
    public ListSystemsQueryParams withFilterLastEvaluation(String filterLastEvaluation) {
        this.filterLastEvaluation = filterLastEvaluation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[last_upload]")
    public String filterLastUpload;
    public ListSystemsQueryParams withFilterLastUpload(String filterLastUpload) {
        this.filterLastUpload = filterLastUpload;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[other_count]")
    public String filterOtherCount;
    public ListSystemsQueryParams withFilterOtherCount(String filterOtherCount) {
        this.filterOtherCount = filterOtherCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[packages_installed]")
    public String filterPackagesInstalled;
    public ListSystemsQueryParams withFilterPackagesInstalled(String filterPackagesInstalled) {
        this.filterPackagesInstalled = filterPackagesInstalled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[packages_updatable]")
    public String filterPackagesUpdatable;
    public ListSystemsQueryParams withFilterPackagesUpdatable(String filterPackagesUpdatable) {
        this.filterPackagesUpdatable = filterPackagesUpdatable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhba_count]")
    public String filterRhbaCount;
    public ListSystemsQueryParams withFilterRhbaCount(String filterRhbaCount) {
        this.filterRhbaCount = filterRhbaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhea_count]")
    public String filterRheaCount;
    public ListSystemsQueryParams withFilterRheaCount(String filterRheaCount) {
        this.filterRheaCount = filterRheaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhsa_count]")
    public String filterRhsaCount;
    public ListSystemsQueryParams withFilterRhsaCount(String filterRhsaCount) {
        this.filterRhsaCount = filterRhsaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[stale]")
    public String filterStale;
    public ListSystemsQueryParams withFilterStale(String filterStale) {
        this.filterStale = filterStale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[stale_timestamp]")
    public String filterStaleTimestamp;
    public ListSystemsQueryParams withFilterStaleTimestamp(String filterStaleTimestamp) {
        this.filterStaleTimestamp = filterStaleTimestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[stale_warning_timestamp]")
    public String filterStaleWarningTimestamp;
    public ListSystemsQueryParams withFilterStaleWarningTimestamp(String filterStaleWarningTimestamp) {
        this.filterStaleWarningTimestamp = filterStaleWarningTimestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_sids][in]")
    public String[] filterSystemProfileSapSidsIn;
    public ListSystemsQueryParams withFilterSystemProfileSapSidsIn(String[] filterSystemProfileSapSidsIn) {
        this.filterSystemProfileSapSidsIn = filterSystemProfileSapSidsIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_system]")
    public String filterSystemProfileSapSystem;
    public ListSystemsQueryParams withFilterSystemProfileSapSystem(String filterSystemProfileSapSystem) {
        this.filterSystemProfileSapSystem = filterSystemProfileSapSystem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListSystemsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListSystemsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ListSystemsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListSystemsSortEnum sort;
    public ListSystemsQueryParams withSort(ListSystemsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String[] tags;
    public ListSystemsQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}