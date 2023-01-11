package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment")
    public String deployment;
    public DeploymentmanagerDeploymentsGetPathParams withDeployment(String deployment) {
        this.deployment = deployment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerDeploymentsGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}