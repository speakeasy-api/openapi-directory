package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingJobsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public YoutubereportingJobsGetPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}