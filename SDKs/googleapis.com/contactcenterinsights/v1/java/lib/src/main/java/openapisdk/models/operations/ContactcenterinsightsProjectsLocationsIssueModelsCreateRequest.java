package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest {
    public ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams pathParams;
    public ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest withPathParams(ContactcenterinsightsProjectsLocationsIssueModelsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest withQueryParams(ContactcenterinsightsProjectsLocationsIssueModelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1IssueModelInput request;
    public ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1IssueModelInput request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity security;
    public ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest withSecurity(ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity security) {
        this.security = security;
        return this;
    }
}