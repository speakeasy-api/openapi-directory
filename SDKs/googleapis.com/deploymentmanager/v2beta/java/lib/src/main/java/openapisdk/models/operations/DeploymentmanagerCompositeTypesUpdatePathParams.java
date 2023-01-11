package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerCompositeTypesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=compositeType")
    public String compositeType;
    public DeploymentmanagerCompositeTypesUpdatePathParams withCompositeType(String compositeType) {
        this.compositeType = compositeType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerCompositeTypesUpdatePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}