package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCisJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public DeleteCisJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}