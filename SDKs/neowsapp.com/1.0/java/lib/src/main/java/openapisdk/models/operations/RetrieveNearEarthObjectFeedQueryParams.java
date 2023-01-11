package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveNearEarthObjectFeedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=detailed")
    public Boolean detailed;
    public RetrieveNearEarthObjectFeedQueryParams withDetailed(Boolean detailed) {
        this.detailed = detailed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public RetrieveNearEarthObjectFeedQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public RetrieveNearEarthObjectFeedQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}