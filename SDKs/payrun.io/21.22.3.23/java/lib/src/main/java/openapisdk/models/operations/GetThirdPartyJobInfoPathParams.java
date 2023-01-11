package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThirdPartyJobInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetThirdPartyJobInfoPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}