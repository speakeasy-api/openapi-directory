package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRtiJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public DeleteRtiJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}