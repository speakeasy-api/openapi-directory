package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAdvisorySystemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[created]")
    public String filterCreated;
    public ListAdvisorySystemsQueryParams withFilterCreated(String filterCreated) {
        this.filterCreated = filterCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[culled_timestamp]")
    public String filterCulledTimestamp;
    public ListAdvisorySystemsQueryParams withFilterCulledTimestamp(String filterCulledTimestamp) {
        this.filterCulledTimestamp = filterCulledTimestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[display_name]")
    public String filterDisplayName;
    public ListAdvisorySystemsQueryParams withFilterDisplayName(String filterDisplayName) {
        this.filterDisplayName = filterDisplayName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[id]")
    public String filterId;
    public ListAdvisorySystemsQueryParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[insights_id]")
    public String filterInsightsId;
    public ListAdvisorySystemsQueryParams withFilterInsightsId(String filterInsightsId) {
        this.filterInsightsId = filterInsightsId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[last_evaluation]")
    public String filterLastEvaluation;
    public ListAdvisorySystemsQueryParams withFilterLastEvaluation(String filterLastEvaluation) {
        this.filterLastEvaluation = filterLastEvaluation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[last_upload]")
    public String filterLastUpload;
    public ListAdvisorySystemsQueryParams withFilterLastUpload(String filterLastUpload) {
        this.filterLastUpload = filterLastUpload;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[other_count]")
    public String filterOtherCount;
    public ListAdvisorySystemsQueryParams withFilterOtherCount(String filterOtherCount) {
        this.filterOtherCount = filterOtherCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhba_count]")
    public String filterRhbaCount;
    public ListAdvisorySystemsQueryParams withFilterRhbaCount(String filterRhbaCount) {
        this.filterRhbaCount = filterRhbaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhea_count]")
    public String filterRheaCount;
    public ListAdvisorySystemsQueryParams withFilterRheaCount(String filterRheaCount) {
        this.filterRheaCount = filterRheaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[rhsa_count]")
    public String filterRhsaCount;
    public ListAdvisorySystemsQueryParams withFilterRhsaCount(String filterRhsaCount) {
        this.filterRhsaCount = filterRhsaCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[stale]")
    public String filterStale;
    public ListAdvisorySystemsQueryParams withFilterStale(String filterStale) {
        this.filterStale = filterStale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[stale_timestamp]")
    public String filterStaleTimestamp;
    public ListAdvisorySystemsQueryParams withFilterStaleTimestamp(String filterStaleTimestamp) {
        this.filterStaleTimestamp = filterStaleTimestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[stale_warning_timestamp]")
    public String filterStaleWarningTimestamp;
    public ListAdvisorySystemsQueryParams withFilterStaleWarningTimestamp(String filterStaleWarningTimestamp) {
        this.filterStaleWarningTimestamp = filterStaleWarningTimestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_sids][in]")
    public String[] filterSystemProfileSapSidsIn;
    public ListAdvisorySystemsQueryParams withFilterSystemProfileSapSidsIn(String[] filterSystemProfileSapSidsIn) {
        this.filterSystemProfileSapSidsIn = filterSystemProfileSapSidsIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_system]")
    public String filterSystemProfileSapSystem;
    public ListAdvisorySystemsQueryParams withFilterSystemProfileSapSystem(String filterSystemProfileSapSystem) {
        this.filterSystemProfileSapSystem = filterSystemProfileSapSystem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListAdvisorySystemsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListAdvisorySystemsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ListAdvisorySystemsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListAdvisorySystemsSortEnum sort;
    public ListAdvisorySystemsQueryParams withSort(ListAdvisorySystemsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String[] tags;
    public ListAdvisorySystemsQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}