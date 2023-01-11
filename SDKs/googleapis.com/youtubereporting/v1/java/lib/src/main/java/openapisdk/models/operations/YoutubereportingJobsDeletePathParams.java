package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingJobsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public YoutubereportingJobsDeletePathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}