package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderChineseNamePinyinBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameIn request;
    public GenderChineseNamePinyinBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameIn request) {
        this.request = request;
        return this;
    }
    public GenderChineseNamePinyinBatchSecurity security;
    public GenderChineseNamePinyinBatchRequest withSecurity(GenderChineseNamePinyinBatchSecurity security) {
        this.security = security;
        return this;
    }
}