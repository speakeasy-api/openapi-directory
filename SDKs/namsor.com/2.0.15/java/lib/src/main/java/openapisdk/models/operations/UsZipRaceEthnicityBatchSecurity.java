package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsZipRaceEthnicityBatchSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public UsZipRaceEthnicityBatchSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}