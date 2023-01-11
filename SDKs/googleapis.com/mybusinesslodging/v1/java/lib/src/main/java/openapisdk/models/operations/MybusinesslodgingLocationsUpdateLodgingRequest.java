package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinesslodgingLocationsUpdateLodgingRequest {
    public MybusinesslodgingLocationsUpdateLodgingPathParams pathParams;
    public MybusinesslodgingLocationsUpdateLodgingRequest withPathParams(MybusinesslodgingLocationsUpdateLodgingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinesslodgingLocationsUpdateLodgingQueryParams queryParams;
    public MybusinesslodgingLocationsUpdateLodgingRequest withQueryParams(MybusinesslodgingLocationsUpdateLodgingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LodgingInput request;
    public MybusinesslodgingLocationsUpdateLodgingRequest withRequest(openapisdk.models.shared.LodgingInput request) {
        this.request = request;
        return this;
    }
}