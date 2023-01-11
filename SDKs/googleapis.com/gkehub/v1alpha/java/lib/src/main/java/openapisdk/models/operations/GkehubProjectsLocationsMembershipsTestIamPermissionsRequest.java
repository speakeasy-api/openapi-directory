package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsTestIamPermissionsRequest {
    public GkehubProjectsLocationsMembershipsTestIamPermissionsPathParams pathParams;
    public GkehubProjectsLocationsMembershipsTestIamPermissionsRequest withPathParams(GkehubProjectsLocationsMembershipsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsMembershipsTestIamPermissionsQueryParams queryParams;
    public GkehubProjectsLocationsMembershipsTestIamPermissionsRequest withQueryParams(GkehubProjectsLocationsMembershipsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public GkehubProjectsLocationsMembershipsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity security;
    public GkehubProjectsLocationsMembershipsTestIamPermissionsRequest withSecurity(GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}