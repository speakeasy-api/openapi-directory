package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderJapaneseNamePinyinBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameIn request;
    public GenderJapaneseNamePinyinBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameIn request) {
        this.request = request;
        return this;
    }
    public GenderJapaneseNamePinyinBatchSecurity security;
    public GenderJapaneseNamePinyinBatchRequest withSecurity(GenderJapaneseNamePinyinBatchSecurity security) {
        this.security = security;
        return this;
    }
}