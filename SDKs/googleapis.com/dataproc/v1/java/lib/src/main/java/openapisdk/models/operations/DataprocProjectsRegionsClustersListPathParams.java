package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DataprocProjectsRegionsClustersListPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public DataprocProjectsRegionsClustersListPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}