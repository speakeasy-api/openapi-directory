package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerCompositeTypesUpdateRequest {
    public DeploymentmanagerCompositeTypesUpdatePathParams pathParams;
    public DeploymentmanagerCompositeTypesUpdateRequest withPathParams(DeploymentmanagerCompositeTypesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerCompositeTypesUpdateQueryParams queryParams;
    public DeploymentmanagerCompositeTypesUpdateRequest withQueryParams(DeploymentmanagerCompositeTypesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompositeType request;
    public DeploymentmanagerCompositeTypesUpdateRequest withRequest(openapisdk.models.shared.CompositeType request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerCompositeTypesUpdateSecurity security;
    public DeploymentmanagerCompositeTypesUpdateRequest withSecurity(DeploymentmanagerCompositeTypesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}