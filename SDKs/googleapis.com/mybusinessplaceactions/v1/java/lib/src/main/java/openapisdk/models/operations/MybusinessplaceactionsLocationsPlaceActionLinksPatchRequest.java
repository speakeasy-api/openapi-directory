package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest {
    public MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams pathParams;
    public MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest withPathParams(MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams queryParams;
    public MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest withQueryParams(MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlaceActionLinkInput request;
    public MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest withRequest(openapisdk.models.shared.PlaceActionLinkInput request) {
        this.request = request;
        return this;
    }
}