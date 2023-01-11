package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsViewsPatchRequest {
    public ContactcenterinsightsProjectsLocationsViewsPatchPathParams pathParams;
    public ContactcenterinsightsProjectsLocationsViewsPatchRequest withPathParams(ContactcenterinsightsProjectsLocationsViewsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsViewsPatchQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsViewsPatchRequest withQueryParams(ContactcenterinsightsProjectsLocationsViewsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ViewInput request;
    public ContactcenterinsightsProjectsLocationsViewsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ViewInput request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsViewsPatchSecurity security;
    public ContactcenterinsightsProjectsLocationsViewsPatchRequest withSecurity(ContactcenterinsightsProjectsLocationsViewsPatchSecurity security) {
        this.security = security;
        return this;
    }
}