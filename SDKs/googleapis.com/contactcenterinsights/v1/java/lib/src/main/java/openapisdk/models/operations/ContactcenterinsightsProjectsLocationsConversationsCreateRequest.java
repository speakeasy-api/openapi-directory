package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsConversationsCreateRequest {
    public ContactcenterinsightsProjectsLocationsConversationsCreatePathParams pathParams;
    public ContactcenterinsightsProjectsLocationsConversationsCreateRequest withPathParams(ContactcenterinsightsProjectsLocationsConversationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsConversationsCreateRequest withQueryParams(ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ConversationInput request;
    public ContactcenterinsightsProjectsLocationsConversationsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ConversationInput request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsConversationsCreateSecurity security;
    public ContactcenterinsightsProjectsLocationsConversationsCreateRequest withSecurity(ContactcenterinsightsProjectsLocationsConversationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}