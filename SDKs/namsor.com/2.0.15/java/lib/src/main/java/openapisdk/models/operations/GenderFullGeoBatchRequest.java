package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderFullGeoBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameGeoIn request;
    public GenderFullGeoBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameGeoIn request) {
        this.request = request;
        return this;
    }
    public GenderFullGeoBatchSecurity security;
    public GenderFullGeoBatchRequest withSecurity(GenderFullGeoBatchSecurity security) {
        this.security = security;
        return this;
    }
}