package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictTeamsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public GetDistrictTeamsSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}