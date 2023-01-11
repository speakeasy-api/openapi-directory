package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerTypeProvidersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerTypeProvidersPatchPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=typeProvider")
    public String typeProvider;
    public DeploymentmanagerTypeProvidersPatchPathParams withTypeProvider(String typeProvider) {
        this.typeProvider = typeProvider;
        return this;
    }
}