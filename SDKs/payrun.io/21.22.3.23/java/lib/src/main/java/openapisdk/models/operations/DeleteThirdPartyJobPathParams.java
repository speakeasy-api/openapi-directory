package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteThirdPartyJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public DeleteThirdPartyJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}