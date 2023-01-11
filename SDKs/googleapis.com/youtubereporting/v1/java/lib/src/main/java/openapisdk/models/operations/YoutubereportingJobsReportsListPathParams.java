package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingJobsReportsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public YoutubereportingJobsReportsListPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}