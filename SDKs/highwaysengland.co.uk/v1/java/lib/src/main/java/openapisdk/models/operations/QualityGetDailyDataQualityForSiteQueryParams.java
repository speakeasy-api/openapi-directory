package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QualityGetDailyDataQualityForSiteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public QualityGetDailyDataQualityForSiteQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=siteId")
    public String siteId;
    public QualityGetDailyDataQualityForSiteQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public QualityGetDailyDataQualityForSiteQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}