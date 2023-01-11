package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest {
    public ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams pathParams;
    public ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest withPathParams(ContactcenterinsightsProjectsLocationsIssueModelsDeployPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest withQueryParams(ContactcenterinsightsProjectsLocationsIssueModelsDeployQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1DeployIssueModelRequest request;
    public ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1DeployIssueModelRequest request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity security;
    public ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest withSecurity(ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity security) {
        this.security = security;
        return this;
    }
}