package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DataprocProjectsRegionsClustersCreatePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public DataprocProjectsRegionsClustersCreatePathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}