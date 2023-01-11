package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}