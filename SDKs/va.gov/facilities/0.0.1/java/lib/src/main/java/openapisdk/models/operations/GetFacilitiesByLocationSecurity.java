package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFacilitiesByLocationSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApikey apikey;
    public GetFacilitiesByLocationSecurity withApikey(openapisdk.models.shared.SchemeApikey apikey) {
        this.apikey = apikey;
        return this;
    }
}