package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRtiJobProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetRtiJobProgressPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}