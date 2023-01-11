package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerTypeProvidersListTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerTypeProvidersListTypesPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=typeProvider")
    public String typeProvider;
    public DeploymentmanagerTypeProvidersListTypesPathParams withTypeProvider(String typeProvider) {
        this.typeProvider = typeProvider;
        return this;
    }
}