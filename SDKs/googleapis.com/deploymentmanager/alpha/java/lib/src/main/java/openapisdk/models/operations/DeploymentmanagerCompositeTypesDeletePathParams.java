package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerCompositeTypesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=compositeType")
    public String compositeType;
    public DeploymentmanagerCompositeTypesDeletePathParams withCompositeType(String compositeType) {
        this.compositeType = compositeType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerCompositeTypesDeletePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}