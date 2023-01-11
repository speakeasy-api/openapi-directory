package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QualityGetOverallDataQualityForSitesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public QualityGetOverallDataQualityForSitesQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sites")
    public String sites;
    public QualityGetOverallDataQualityForSitesQueryParams withSites(String sites) {
        this.sites = sites;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public QualityGetOverallDataQualityForSitesQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}