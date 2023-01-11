package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest {
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams pathParams;
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest withPathParams(ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest withQueryParams(ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest request;
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity security;
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest withSecurity(ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity security) {
        this.security = security;
        return this;
    }
}