package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFacilityByIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApikey apikey;
    public GetFacilityByIdSecurity withApikey(openapisdk.models.shared.SchemeApikey apikey) {
        this.apikey = apikey;
        return this;
    }
}