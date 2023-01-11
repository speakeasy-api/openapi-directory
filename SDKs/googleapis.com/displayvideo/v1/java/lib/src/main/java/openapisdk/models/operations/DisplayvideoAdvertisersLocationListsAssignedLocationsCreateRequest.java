package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest {
    public DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams pathParams;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest withPathParams(DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams queryParams;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest withQueryParams(DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignedLocationInput request;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest withRequest(openapisdk.models.shared.AssignedLocationInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity security;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest withSecurity(DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}