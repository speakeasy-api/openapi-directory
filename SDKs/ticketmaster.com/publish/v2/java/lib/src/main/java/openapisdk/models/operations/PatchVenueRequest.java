package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchVenueRequest {
    public PatchVenuePathParams pathParams;
    public PatchVenueRequest withPathParams(PatchVenuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchVenueHeaders headers;
    public PatchVenueRequest withHeaders(PatchVenueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AugmentationData request;
    public PatchVenueRequest withRequest(openapisdk.models.shared.AugmentationData request) {
        this.request = request;
        return this;
    }
}