package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsViewsCreateRequest {
    public ContactcenterinsightsProjectsLocationsViewsCreatePathParams pathParams;
    public ContactcenterinsightsProjectsLocationsViewsCreateRequest withPathParams(ContactcenterinsightsProjectsLocationsViewsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsViewsCreateQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsViewsCreateRequest withQueryParams(ContactcenterinsightsProjectsLocationsViewsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ViewInput request;
    public ContactcenterinsightsProjectsLocationsViewsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ViewInput request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsViewsCreateSecurity security;
    public ContactcenterinsightsProjectsLocationsViewsCreateRequest withSecurity(ContactcenterinsightsProjectsLocationsViewsCreateSecurity security) {
        this.security = security;
        return this;
    }
}