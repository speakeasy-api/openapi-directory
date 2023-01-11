package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerCompositeTypesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerCompositeTypesInsertPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}