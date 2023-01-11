package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayRunJobStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetPayRunJobStatusPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}