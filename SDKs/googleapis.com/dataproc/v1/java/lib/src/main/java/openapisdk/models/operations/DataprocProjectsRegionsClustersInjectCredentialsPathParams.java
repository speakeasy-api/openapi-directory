package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersInjectCredentialsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster")
    public String cluster;
    public DataprocProjectsRegionsClustersInjectCredentialsPathParams withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DataprocProjectsRegionsClustersInjectCredentialsPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public DataprocProjectsRegionsClustersInjectCredentialsPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}