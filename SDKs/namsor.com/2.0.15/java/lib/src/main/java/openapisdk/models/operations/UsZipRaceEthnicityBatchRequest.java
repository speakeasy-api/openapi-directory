package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsZipRaceEthnicityBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameGeoZippedIn request;
    public UsZipRaceEthnicityBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameGeoZippedIn request) {
        this.request = request;
        return this;
    }
    public UsZipRaceEthnicityBatchSecurity security;
    public UsZipRaceEthnicityBatchRequest withSecurity(UsZipRaceEthnicityBatchSecurity security) {
        this.security = security;
        return this;
    }
}