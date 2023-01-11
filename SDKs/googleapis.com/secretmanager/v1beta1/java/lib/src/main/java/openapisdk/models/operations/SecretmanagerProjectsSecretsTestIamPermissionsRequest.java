package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsSecretsTestIamPermissionsRequest {
    public SecretmanagerProjectsSecretsTestIamPermissionsPathParams pathParams;
    public SecretmanagerProjectsSecretsTestIamPermissionsRequest withPathParams(SecretmanagerProjectsSecretsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsTestIamPermissionsQueryParams queryParams;
    public SecretmanagerProjectsSecretsTestIamPermissionsRequest withQueryParams(SecretmanagerProjectsSecretsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public SecretmanagerProjectsSecretsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public SecretmanagerProjectsSecretsTestIamPermissionsSecurity security;
    public SecretmanagerProjectsSecretsTestIamPermissionsRequest withSecurity(SecretmanagerProjectsSecretsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}