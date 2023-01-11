package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsJobsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DataprocProjectsRegionsJobsListPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public DataprocProjectsRegionsJobsListPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}