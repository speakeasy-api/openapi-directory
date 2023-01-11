package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest {
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams pathParams;
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest withPathParams(PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest withQueryParams(PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity security;
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest withSecurity(PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}