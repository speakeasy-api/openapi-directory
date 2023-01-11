package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesTestIamPermissionsRequest {
    public DnsManagedZonesTestIamPermissionsPathParams pathParams;
    public DnsManagedZonesTestIamPermissionsRequest withPathParams(DnsManagedZonesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZonesTestIamPermissionsQueryParams queryParams;
    public DnsManagedZonesTestIamPermissionsRequest withQueryParams(DnsManagedZonesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request;
    public DnsManagedZonesTestIamPermissionsRequest withRequest(openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public DnsManagedZonesTestIamPermissionsSecurity security;
    public DnsManagedZonesTestIamPermissionsRequest withSecurity(DnsManagedZonesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}