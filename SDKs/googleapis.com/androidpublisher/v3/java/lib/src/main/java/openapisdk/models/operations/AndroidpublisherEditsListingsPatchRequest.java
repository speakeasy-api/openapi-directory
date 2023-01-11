package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsListingsPatchRequest {
    public AndroidpublisherEditsListingsPatchPathParams pathParams;
    public AndroidpublisherEditsListingsPatchRequest withPathParams(AndroidpublisherEditsListingsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsListingsPatchQueryParams queryParams;
    public AndroidpublisherEditsListingsPatchRequest withQueryParams(AndroidpublisherEditsListingsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Listing request;
    public AndroidpublisherEditsListingsPatchRequest withRequest(openapisdk.models.shared.Listing request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsListingsPatchSecurity security;
    public AndroidpublisherEditsListingsPatchRequest withSecurity(AndroidpublisherEditsListingsPatchSecurity security) {
        this.security = security;
        return this;
    }
}