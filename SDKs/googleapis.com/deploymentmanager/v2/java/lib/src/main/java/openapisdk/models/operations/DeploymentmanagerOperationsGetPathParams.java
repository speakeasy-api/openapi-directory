package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=operation")
    public String operation;
    public DeploymentmanagerOperationsGetPathParams withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerOperationsGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}