package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSolutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public GetSolutionPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}