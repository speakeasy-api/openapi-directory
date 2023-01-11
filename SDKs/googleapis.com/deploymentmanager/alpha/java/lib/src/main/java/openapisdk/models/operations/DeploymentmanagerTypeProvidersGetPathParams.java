package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerTypeProvidersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerTypeProvidersGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=typeProvider")
    public String typeProvider;
    public DeploymentmanagerTypeProvidersGetPathParams withTypeProvider(String typeProvider) {
        this.typeProvider = typeProvider;
        return this;
    }
}