package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsListingsUpdateRequest {
    public AndroidpublisherEditsListingsUpdatePathParams pathParams;
    public AndroidpublisherEditsListingsUpdateRequest withPathParams(AndroidpublisherEditsListingsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsListingsUpdateQueryParams queryParams;
    public AndroidpublisherEditsListingsUpdateRequest withQueryParams(AndroidpublisherEditsListingsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Listing request;
    public AndroidpublisherEditsListingsUpdateRequest withRequest(openapisdk.models.shared.Listing request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsListingsUpdateSecurity security;
    public AndroidpublisherEditsListingsUpdateRequest withSecurity(AndroidpublisherEditsListingsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}