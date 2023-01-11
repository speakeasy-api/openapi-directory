package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest {
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreatePathParams pathParams;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest withPathParams(ContactcenterinsightsProjectsLocationsConversationsAnalysesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest withQueryParams(ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1AnalysisInput request;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1AnalysisInput request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity security;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest withSecurity(ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity security) {
        this.security = security;
        return this;
    }
}