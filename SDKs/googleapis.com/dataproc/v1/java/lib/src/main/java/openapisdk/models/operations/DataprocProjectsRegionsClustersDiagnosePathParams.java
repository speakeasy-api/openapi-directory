package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersDiagnosePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clusterName")
    public String clusterName;
    public DataprocProjectsRegionsClustersDiagnosePathParams withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DataprocProjectsRegionsClustersDiagnosePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public DataprocProjectsRegionsClustersDiagnosePathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}