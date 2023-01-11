package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment")
    public String deployment;
    public DeploymentmanagerDeploymentsUpdatePathParams withDeployment(String deployment) {
        this.deployment = deployment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerDeploymentsUpdatePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}