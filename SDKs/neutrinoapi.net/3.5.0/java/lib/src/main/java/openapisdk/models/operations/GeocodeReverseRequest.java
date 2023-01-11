package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GeocodeReverseRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public GeocodeReverseRequestBody request;
    public GeocodeReverseRequest withRequest(GeocodeReverseRequestBody request) {
        this.request = request;
        return this;
    }
}