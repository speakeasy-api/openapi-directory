package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsUserUsageReportGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ReportsUserUsageReportGetPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userKey")
    public String userKey;
    public ReportsUserUsageReportGetPathParams withUserKey(String userKey) {
        this.userKey = userKey;
        return this;
    }
}