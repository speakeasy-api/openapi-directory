package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThirdPartyJobStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetThirdPartyJobStatusPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}