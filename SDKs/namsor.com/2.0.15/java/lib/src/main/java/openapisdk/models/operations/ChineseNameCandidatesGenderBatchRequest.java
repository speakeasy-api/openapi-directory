package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChineseNameCandidatesGenderBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameGenderIn request;
    public ChineseNameCandidatesGenderBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameGenderIn request) {
        this.request = request;
        return this;
    }
    public ChineseNameCandidatesGenderBatchSecurity security;
    public ChineseNameCandidatesGenderBatchRequest withSecurity(ChineseNameCandidatesGenderBatchSecurity security) {
        this.security = security;
        return this;
    }
}