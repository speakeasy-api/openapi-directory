package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNearbyFacilitiesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApikey apikey;
    public GetNearbyFacilitiesSecurity withApikey(openapisdk.models.shared.SchemeApikey apikey) {
        this.apikey = apikey;
        return this;
    }
}