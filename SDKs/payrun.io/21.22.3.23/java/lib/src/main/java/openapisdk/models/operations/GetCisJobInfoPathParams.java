package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisJobInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetCisJobInfoPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}