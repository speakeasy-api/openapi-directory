package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAdvisoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[advisory_type]")
    public String filterAdvisoryType;
    public ListAdvisoriesQueryParams withFilterAdvisoryType(String filterAdvisoryType) {
        this.filterAdvisoryType = filterAdvisoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[applicable_systems]")
    public String filterApplicableSystems;
    public ListAdvisoriesQueryParams withFilterApplicableSystems(String filterApplicableSystems) {
        this.filterApplicableSystems = filterApplicableSystems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[description]")
    public String filterDescription;
    public ListAdvisoriesQueryParams withFilterDescription(String filterDescription) {
        this.filterDescription = filterDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[id]")
    public String filterId;
    public ListAdvisoriesQueryParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[public_date]")
    public String filterPublicDate;
    public ListAdvisoriesQueryParams withFilterPublicDate(String filterPublicDate) {
        this.filterPublicDate = filterPublicDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[severity]")
    public String filterSeverity;
    public ListAdvisoriesQueryParams withFilterSeverity(String filterSeverity) {
        this.filterSeverity = filterSeverity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[synopsis]")
    public String filterSynopsis;
    public ListAdvisoriesQueryParams withFilterSynopsis(String filterSynopsis) {
        this.filterSynopsis = filterSynopsis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_sids][in]")
    public String[] filterSystemProfileSapSidsIn;
    public ListAdvisoriesQueryParams withFilterSystemProfileSapSidsIn(String[] filterSystemProfileSapSidsIn) {
        this.filterSystemProfileSapSidsIn = filterSystemProfileSapSidsIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[system_profile][sap_system]")
    public String filterSystemProfileSapSystem;
    public ListAdvisoriesQueryParams withFilterSystemProfileSapSystem(String filterSystemProfileSapSystem) {
        this.filterSystemProfileSapSystem = filterSystemProfileSapSystem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListAdvisoriesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListAdvisoriesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ListAdvisoriesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListAdvisoriesSortEnum sort;
    public ListAdvisoriesQueryParams withSort(ListAdvisoriesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String[] tags;
    public ListAdvisoriesQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}