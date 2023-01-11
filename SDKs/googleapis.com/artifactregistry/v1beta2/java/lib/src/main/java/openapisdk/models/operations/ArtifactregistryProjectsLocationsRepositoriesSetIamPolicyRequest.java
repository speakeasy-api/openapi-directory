package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest {
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyPathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}