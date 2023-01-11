package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderJapaneseNameFullBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameIn request;
    public GenderJapaneseNameFullBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameIn request) {
        this.request = request;
        return this;
    }
    public GenderJapaneseNameFullBatchSecurity security;
    public GenderJapaneseNameFullBatchRequest withSecurity(GenderJapaneseNameFullBatchSecurity security) {
        this.security = security;
        return this;
    }
}