package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NameTypeGeoBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchNameGeoIn request;
    public NameTypeGeoBatchRequest withRequest(openapisdk.models.shared.BatchNameGeoIn request) {
        this.request = request;
        return this;
    }
    public NameTypeGeoBatchSecurity security;
    public NameTypeGeoBatchRequest withSecurity(NameTypeGeoBatchSecurity security) {
        this.security = security;
        return this;
    }
}