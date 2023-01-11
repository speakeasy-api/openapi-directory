package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest {
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams pathParams;
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest withPathParams(GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams queryParams;
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest withQueryParams(GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity security;
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest withSecurity(GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}