package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClusterSolutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public GetClusterSolutionPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}