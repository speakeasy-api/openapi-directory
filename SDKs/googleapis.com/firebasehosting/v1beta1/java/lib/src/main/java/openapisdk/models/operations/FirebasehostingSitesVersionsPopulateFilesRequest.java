package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesVersionsPopulateFilesRequest {
    public FirebasehostingSitesVersionsPopulateFilesPathParams pathParams;
    public FirebasehostingSitesVersionsPopulateFilesRequest withPathParams(FirebasehostingSitesVersionsPopulateFilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingSitesVersionsPopulateFilesQueryParams queryParams;
    public FirebasehostingSitesVersionsPopulateFilesRequest withQueryParams(FirebasehostingSitesVersionsPopulateFilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PopulateVersionFilesRequest request;
    public FirebasehostingSitesVersionsPopulateFilesRequest withRequest(openapisdk.models.shared.PopulateVersionFilesRequest request) {
        this.request = request;
        return this;
    }
    public FirebasehostingSitesVersionsPopulateFilesSecurity security;
    public FirebasehostingSitesVersionsPopulateFilesRequest withSecurity(FirebasehostingSitesVersionsPopulateFilesSecurity security) {
        this.security = security;
        return this;
    }
}