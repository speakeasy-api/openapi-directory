package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerTypeProvidersGetTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DeploymentmanagerTypeProvidersGetTypePathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public DeploymentmanagerTypeProvidersGetTypePathParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=typeProvider")
    public String typeProvider;
    public DeploymentmanagerTypeProvidersGetTypePathParams withTypeProvider(String typeProvider) {
        this.typeProvider = typeProvider;
        return this;
    }
}