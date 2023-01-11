package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JapaneseNameMatchBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchMatchPersonalFirstLastNameIn request;
    public JapaneseNameMatchBatchRequest withRequest(openapisdk.models.shared.BatchMatchPersonalFirstLastNameIn request) {
        this.request = request;
        return this;
    }
    public JapaneseNameMatchBatchSecurity security;
    public JapaneseNameMatchBatchRequest withSecurity(JapaneseNameMatchBatchSecurity security) {
        this.security = security;
        return this;
    }
}