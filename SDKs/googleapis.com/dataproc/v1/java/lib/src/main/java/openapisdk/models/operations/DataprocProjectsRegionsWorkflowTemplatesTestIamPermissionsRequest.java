package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest {
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsPathParams pathParams;
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest withPathParams(DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsQueryParams queryParams;
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest withQueryParams(DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity security;
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest withSecurity(DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}