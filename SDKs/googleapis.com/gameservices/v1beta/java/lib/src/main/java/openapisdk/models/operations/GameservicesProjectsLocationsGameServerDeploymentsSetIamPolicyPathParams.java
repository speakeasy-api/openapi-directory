package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}