package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatrixSolutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public GetMatrixSolutionPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}