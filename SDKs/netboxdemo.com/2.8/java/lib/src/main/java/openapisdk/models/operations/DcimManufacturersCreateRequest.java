package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimManufacturersCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ManufacturerInput request;
    public DcimManufacturersCreateRequest withRequest(openapisdk.models.shared.ManufacturerInput request) {
        this.request = request;
        return this;
    }
}