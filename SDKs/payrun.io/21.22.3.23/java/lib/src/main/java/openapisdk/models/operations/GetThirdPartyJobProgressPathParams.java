package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThirdPartyJobProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetThirdPartyJobProgressPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}