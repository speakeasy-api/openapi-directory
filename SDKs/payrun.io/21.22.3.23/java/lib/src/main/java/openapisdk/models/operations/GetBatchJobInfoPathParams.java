package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBatchJobInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetBatchJobInfoPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}