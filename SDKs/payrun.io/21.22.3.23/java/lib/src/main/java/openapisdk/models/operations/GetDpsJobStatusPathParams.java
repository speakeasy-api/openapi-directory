package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDpsJobStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetDpsJobStatusPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}