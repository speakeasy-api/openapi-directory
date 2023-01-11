package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerTypeProvidersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerTypeProvidersUpdatePathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=typeProvider")
    public String typeProvider;
    public DeploymentmanagerTypeProvidersUpdatePathParams withTypeProvider(String typeProvider) {
        this.typeProvider = typeProvider;
        return this;
    }
}