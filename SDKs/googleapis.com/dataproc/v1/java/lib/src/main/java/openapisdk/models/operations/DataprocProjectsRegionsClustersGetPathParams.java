package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clusterName")
    public String clusterName;
    public DataprocProjectsRegionsClustersGetPathParams withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DataprocProjectsRegionsClustersGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public DataprocProjectsRegionsClustersGetPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}