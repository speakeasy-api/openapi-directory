package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDpsJobProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetDpsJobProgressPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}