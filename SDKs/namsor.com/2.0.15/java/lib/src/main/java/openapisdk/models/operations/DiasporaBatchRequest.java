package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiasporaBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameGeoIn request;
    public DiasporaBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameGeoIn request) {
        this.request = request;
        return this;
    }
    public DiasporaBatchSecurity security;
    public DiasporaBatchRequest withSecurity(DiasporaBatchSecurity security) {
        this.security = security;
        return this;
    }
}