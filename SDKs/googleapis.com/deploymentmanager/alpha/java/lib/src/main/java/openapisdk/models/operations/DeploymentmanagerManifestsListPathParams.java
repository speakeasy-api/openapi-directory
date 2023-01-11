package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerManifestsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment")
    public String deployment;
    public DeploymentmanagerManifestsListPathParams withDeployment(String deployment) {
        this.deployment = deployment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerManifestsListPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}