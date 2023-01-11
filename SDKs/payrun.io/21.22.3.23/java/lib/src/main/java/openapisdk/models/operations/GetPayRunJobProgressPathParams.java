package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayRunJobProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetPayRunJobProgressPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}