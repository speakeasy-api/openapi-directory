package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersTestIamPermissionsRequest {
    public EventarcProjectsLocationsTriggersTestIamPermissionsPathParams pathParams;
    public EventarcProjectsLocationsTriggersTestIamPermissionsRequest withPathParams(EventarcProjectsLocationsTriggersTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsTriggersTestIamPermissionsQueryParams queryParams;
    public EventarcProjectsLocationsTriggersTestIamPermissionsRequest withQueryParams(EventarcProjectsLocationsTriggersTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public EventarcProjectsLocationsTriggersTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public EventarcProjectsLocationsTriggersTestIamPermissionsSecurity security;
    public EventarcProjectsLocationsTriggersTestIamPermissionsRequest withSecurity(EventarcProjectsLocationsTriggersTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}