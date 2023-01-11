package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsRaceEthnicityBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameGeoIn request;
    public UsRaceEthnicityBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameGeoIn request) {
        this.request = request;
        return this;
    }
    public UsRaceEthnicityBatchSecurity security;
    public UsRaceEthnicityBatchRequest withSecurity(UsRaceEthnicityBatchSecurity security) {
        this.security = security;
        return this;
    }
}