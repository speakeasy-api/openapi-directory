package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest {
    public MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams pathParams;
    public MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest withPathParams(MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams queryParams;
    public MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest withQueryParams(MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlaceActionLinkInput request;
    public MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest withRequest(openapisdk.models.shared.PlaceActionLinkInput request) {
        this.request = request;
        return this;
    }
}