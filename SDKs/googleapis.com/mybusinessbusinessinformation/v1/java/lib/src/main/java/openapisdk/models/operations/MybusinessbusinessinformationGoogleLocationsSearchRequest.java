package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessbusinessinformationGoogleLocationsSearchRequest {
    public MybusinessbusinessinformationGoogleLocationsSearchQueryParams queryParams;
    public MybusinessbusinessinformationGoogleLocationsSearchRequest withQueryParams(MybusinessbusinessinformationGoogleLocationsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchGoogleLocationsRequestInput request;
    public MybusinessbusinessinformationGoogleLocationsSearchRequest withRequest(openapisdk.models.shared.SearchGoogleLocationsRequestInput request) {
        this.request = request;
        return this;
    }
}