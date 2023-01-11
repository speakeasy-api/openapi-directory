package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePayRunJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public DeletePayRunJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}