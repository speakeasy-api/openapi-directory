package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GeocodeAddressRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public GeocodeAddressRequestBody request;
    public GeocodeAddressRequest withRequest(GeocodeAddressRequestBody request) {
        this.request = request;
        return this;
    }
}