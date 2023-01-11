package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChineseNameCandidatesBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameIn request;
    public ChineseNameCandidatesBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameIn request) {
        this.request = request;
        return this;
    }
    public ChineseNameCandidatesBatchSecurity security;
    public ChineseNameCandidatesBatchRequest withSecurity(ChineseNameCandidatesBatchSecurity security) {
        this.security = security;
        return this;
    }
}