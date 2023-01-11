package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest {
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams pathParams;
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest withPathParams(ContactcenterinsightsProjectsLocationsIssueModelsUndeployPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest withQueryParams(ContactcenterinsightsProjectsLocationsIssueModelsUndeployQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest request;
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity security;
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest withSecurity(ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity security) {
        this.security = security;
        return this;
    }
}