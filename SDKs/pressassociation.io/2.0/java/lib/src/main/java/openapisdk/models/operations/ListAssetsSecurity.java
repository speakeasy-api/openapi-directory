package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssetsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApikey apikey;
    public ListAssetsSecurity withApikey(openapisdk.models.shared.SchemeApikey apikey) {
        this.apikey = apikey;
        return this;
    }
}