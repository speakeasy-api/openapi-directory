package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayRunJobInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetPayRunJobInfoPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}