package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSystemAdvisoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[advisory_type]")
    public String filterAdvisoryType;
    public ExportSystemAdvisoriesQueryParams withFilterAdvisoryType(String filterAdvisoryType) {
        this.filterAdvisoryType = filterAdvisoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[description]")
    public String filterDescription;
    public ExportSystemAdvisoriesQueryParams withFilterDescription(String filterDescription) {
        this.filterDescription = filterDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[id]")
    public String filterId;
    public ExportSystemAdvisoriesQueryParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[public_date]")
    public String filterPublicDate;
    public ExportSystemAdvisoriesQueryParams withFilterPublicDate(String filterPublicDate) {
        this.filterPublicDate = filterPublicDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[severity]")
    public String filterSeverity;
    public ExportSystemAdvisoriesQueryParams withFilterSeverity(String filterSeverity) {
        this.filterSeverity = filterSeverity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[synopsis]")
    public String filterSynopsis;
    public ExportSystemAdvisoriesQueryParams withFilterSynopsis(String filterSynopsis) {
        this.filterSynopsis = filterSynopsis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportSystemAdvisoriesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}