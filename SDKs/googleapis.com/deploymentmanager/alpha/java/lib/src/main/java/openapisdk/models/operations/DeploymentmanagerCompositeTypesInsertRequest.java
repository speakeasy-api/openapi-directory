package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerCompositeTypesInsertRequest {
    public DeploymentmanagerCompositeTypesInsertPathParams pathParams;
    public DeploymentmanagerCompositeTypesInsertRequest withPathParams(DeploymentmanagerCompositeTypesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerCompositeTypesInsertQueryParams queryParams;
    public DeploymentmanagerCompositeTypesInsertRequest withQueryParams(DeploymentmanagerCompositeTypesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompositeType request;
    public DeploymentmanagerCompositeTypesInsertRequest withRequest(openapisdk.models.shared.CompositeType request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerCompositeTypesInsertSecurity security;
    public DeploymentmanagerCompositeTypesInsertRequest withSecurity(DeploymentmanagerCompositeTypesInsertSecurity security) {
        this.security = security;
        return this;
    }
}