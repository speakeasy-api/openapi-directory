package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseChineseNameBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameIn request;
    public ParseChineseNameBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameIn request) {
        this.request = request;
        return this;
    }
    public ParseChineseNameBatchSecurity security;
    public ParseChineseNameBatchRequest withSecurity(ParseChineseNameBatchSecurity security) {
        this.security = security;
        return this;
    }
}