package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerDeploymentsGetIamPolicyPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DeploymentmanagerDeploymentsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}