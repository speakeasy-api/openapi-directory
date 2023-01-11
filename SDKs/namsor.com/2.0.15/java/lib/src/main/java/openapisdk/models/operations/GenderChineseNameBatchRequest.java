package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderChineseNameBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameIn request;
    public GenderChineseNameBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameIn request) {
        this.request = request;
        return this;
    }
    public GenderChineseNameBatchSecurity security;
    public GenderChineseNameBatchRequest withSecurity(GenderChineseNameBatchSecurity security) {
        this.security = security;
        return this;
    }
}