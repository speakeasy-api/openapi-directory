package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseJapaneseNameBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameIn request;
    public ParseJapaneseNameBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameIn request) {
        this.request = request;
        return this;
    }
    public ParseJapaneseNameBatchSecurity security;
    public ParseJapaneseNameBatchRequest withSecurity(ParseJapaneseNameBatchSecurity security) {
        this.security = security;
        return this;
    }
}