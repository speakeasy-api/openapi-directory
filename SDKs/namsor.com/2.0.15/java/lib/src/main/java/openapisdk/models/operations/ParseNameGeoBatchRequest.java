package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseNameGeoBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameGeoIn request;
    public ParseNameGeoBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameGeoIn request) {
        this.request = request;
        return this;
    }
    public ParseNameGeoBatchSecurity security;
    public ParseNameGeoBatchRequest withSecurity(ParseNameGeoBatchSecurity security) {
        this.security = security;
        return this;
    }
}