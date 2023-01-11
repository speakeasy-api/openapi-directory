package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBatchJobStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetBatchJobStatusPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}