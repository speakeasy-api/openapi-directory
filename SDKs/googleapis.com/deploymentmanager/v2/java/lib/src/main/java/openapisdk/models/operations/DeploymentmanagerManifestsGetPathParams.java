package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerManifestsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment")
    public String deployment;
    public DeploymentmanagerManifestsGetPathParams withDeployment(String deployment) {
        this.deployment = deployment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=manifest")
    public String manifest;
    public DeploymentmanagerManifestsGetPathParams withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerManifestsGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}