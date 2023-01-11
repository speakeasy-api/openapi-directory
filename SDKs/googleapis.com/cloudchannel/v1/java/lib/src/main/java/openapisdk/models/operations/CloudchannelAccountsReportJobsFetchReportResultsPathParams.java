package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsReportJobsFetchReportResultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportJob")
    public String reportJob;
    public CloudchannelAccountsReportJobsFetchReportResultsPathParams withReportJob(String reportJob) {
        this.reportJob = reportJob;
        return this;
    }
}