package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBatchJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public DeleteBatchJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}