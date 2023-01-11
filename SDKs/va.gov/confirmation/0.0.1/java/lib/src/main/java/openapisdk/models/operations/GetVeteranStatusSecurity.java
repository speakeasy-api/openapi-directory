package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVeteranStatusSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApikey apikey;
    public GetVeteranStatusSecurity withApikey(openapisdk.models.shared.SchemeApikey apikey) {
        this.apikey = apikey;
        return this;
    }
}