package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsRaceEthnicityZip5Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public UsRaceEthnicityZip5Security withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}