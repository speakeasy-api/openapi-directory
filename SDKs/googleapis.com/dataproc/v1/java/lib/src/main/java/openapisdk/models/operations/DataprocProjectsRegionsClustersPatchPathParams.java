package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clusterName")
    public String clusterName;
    public DataprocProjectsRegionsClustersPatchPathParams withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DataprocProjectsRegionsClustersPatchPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public DataprocProjectsRegionsClustersPatchPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}