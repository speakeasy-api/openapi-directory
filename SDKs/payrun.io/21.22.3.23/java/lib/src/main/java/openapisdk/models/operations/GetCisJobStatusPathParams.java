package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisJobStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetCisJobStatusPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}