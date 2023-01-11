package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisJobProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetCisJobProgressPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}