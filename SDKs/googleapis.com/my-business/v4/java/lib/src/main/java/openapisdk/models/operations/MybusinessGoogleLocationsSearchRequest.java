package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessGoogleLocationsSearchRequest {
    public MybusinessGoogleLocationsSearchQueryParams queryParams;
    public MybusinessGoogleLocationsSearchRequest withQueryParams(MybusinessGoogleLocationsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchGoogleLocationsRequestInput request;
    public MybusinessGoogleLocationsSearchRequest withRequest(openapisdk.models.shared.SearchGoogleLocationsRequestInput request) {
        this.request = request;
        return this;
    }
}