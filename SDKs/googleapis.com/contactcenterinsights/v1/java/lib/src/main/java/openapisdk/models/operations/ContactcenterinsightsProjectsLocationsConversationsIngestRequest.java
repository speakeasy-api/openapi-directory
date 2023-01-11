package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsConversationsIngestRequest {
    public ContactcenterinsightsProjectsLocationsConversationsIngestPathParams pathParams;
    public ContactcenterinsightsProjectsLocationsConversationsIngestRequest withPathParams(ContactcenterinsightsProjectsLocationsConversationsIngestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsConversationsIngestRequest withQueryParams(ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequest request;
    public ContactcenterinsightsProjectsLocationsConversationsIngestRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequest request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsConversationsIngestSecurity security;
    public ContactcenterinsightsProjectsLocationsConversationsIngestRequest withSecurity(ContactcenterinsightsProjectsLocationsConversationsIngestSecurity security) {
        this.security = security;
        return this;
    }
}