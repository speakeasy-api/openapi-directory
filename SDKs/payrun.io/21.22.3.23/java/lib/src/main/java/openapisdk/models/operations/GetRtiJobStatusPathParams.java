package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRtiJobStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetRtiJobStatusPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}