package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderJapaneseNameFullBatchSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public GenderJapaneseNameFullBatchSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}