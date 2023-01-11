package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsExpansionfilesUpdateRequest {
    public AndroidpublisherEditsExpansionfilesUpdatePathParams pathParams;
    public AndroidpublisherEditsExpansionfilesUpdateRequest withPathParams(AndroidpublisherEditsExpansionfilesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsExpansionfilesUpdateQueryParams queryParams;
    public AndroidpublisherEditsExpansionfilesUpdateRequest withQueryParams(AndroidpublisherEditsExpansionfilesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExpansionFile request;
    public AndroidpublisherEditsExpansionfilesUpdateRequest withRequest(openapisdk.models.shared.ExpansionFile request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsExpansionfilesUpdateSecurity security;
    public AndroidpublisherEditsExpansionfilesUpdateRequest withSecurity(AndroidpublisherEditsExpansionfilesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}