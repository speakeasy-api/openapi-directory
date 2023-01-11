package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChineseNameMatchBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchMatchPersonalFirstLastNameIn request;
    public ChineseNameMatchBatchRequest withRequest(openapisdk.models.shared.BatchMatchPersonalFirstLastNameIn request) {
        this.request = request;
        return this;
    }
    public ChineseNameMatchBatchSecurity security;
    public ChineseNameMatchBatchRequest withSecurity(ChineseNameMatchBatchSecurity security) {
        this.security = security;
        return this;
    }
}