package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerCompositeTypesPatchRequest {
    public DeploymentmanagerCompositeTypesPatchPathParams pathParams;
    public DeploymentmanagerCompositeTypesPatchRequest withPathParams(DeploymentmanagerCompositeTypesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerCompositeTypesPatchQueryParams queryParams;
    public DeploymentmanagerCompositeTypesPatchRequest withQueryParams(DeploymentmanagerCompositeTypesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompositeType request;
    public DeploymentmanagerCompositeTypesPatchRequest withRequest(openapisdk.models.shared.CompositeType request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerCompositeTypesPatchSecurity security;
    public DeploymentmanagerCompositeTypesPatchRequest withSecurity(DeploymentmanagerCompositeTypesPatchSecurity security) {
        this.security = security;
        return this;
    }
}