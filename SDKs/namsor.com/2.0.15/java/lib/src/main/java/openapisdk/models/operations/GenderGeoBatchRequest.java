package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderGeoBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameGeoIn request;
    public GenderGeoBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameGeoIn request) {
        this.request = request;
        return this;
    }
    public GenderGeoBatchSecurity security;
    public GenderGeoBatchRequest withSecurity(GenderGeoBatchSecurity security) {
        this.security = security;
        return this;
    }
}