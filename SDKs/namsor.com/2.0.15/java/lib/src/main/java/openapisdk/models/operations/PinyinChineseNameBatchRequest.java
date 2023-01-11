package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PinyinChineseNameBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameIn request;
    public PinyinChineseNameBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameIn request) {
        this.request = request;
        return this;
    }
    public PinyinChineseNameBatchSecurity security;
    public PinyinChineseNameBatchRequest withSecurity(PinyinChineseNameBatchSecurity security) {
        this.security = security;
        return this;
    }
}