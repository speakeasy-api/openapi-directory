package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAdvisoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[advisory_type]")
    public String filterAdvisoryType;
    public ExportAdvisoriesQueryParams withFilterAdvisoryType(String filterAdvisoryType) {
        this.filterAdvisoryType = filterAdvisoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[applicable_systems]")
    public String filterApplicableSystems;
    public ExportAdvisoriesQueryParams withFilterApplicableSystems(String filterApplicableSystems) {
        this.filterApplicableSystems = filterApplicableSystems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[description]")
    public String filterDescription;
    public ExportAdvisoriesQueryParams withFilterDescription(String filterDescription) {
        this.filterDescription = filterDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[id]")
    public String filterId;
    public ExportAdvisoriesQueryParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[public_date]")
    public String filterPublicDate;
    public ExportAdvisoriesQueryParams withFilterPublicDate(String filterPublicDate) {
        this.filterPublicDate = filterPublicDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[severity]")
    public String filterSeverity;
    public ExportAdvisoriesQueryParams withFilterSeverity(String filterSeverity) {
        this.filterSeverity = filterSeverity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[synopsis]")
    public String filterSynopsis;
    public ExportAdvisoriesQueryParams withFilterSynopsis(String filterSynopsis) {
        this.filterSynopsis = filterSynopsis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportAdvisoriesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}