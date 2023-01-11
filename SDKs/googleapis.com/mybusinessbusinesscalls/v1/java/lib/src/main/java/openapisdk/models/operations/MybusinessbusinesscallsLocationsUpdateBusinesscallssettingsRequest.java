package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest {
    public MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsPathParams pathParams;
    public MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest withPathParams(MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsQueryParams queryParams;
    public MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest withQueryParams(MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BusinessCallsSettings request;
    public MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest withRequest(openapisdk.models.shared.BusinessCallsSettings request) {
        this.request = request;
        return this;
    }
}