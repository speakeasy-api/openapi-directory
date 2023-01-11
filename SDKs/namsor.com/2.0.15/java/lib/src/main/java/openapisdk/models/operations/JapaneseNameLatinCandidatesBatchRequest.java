package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JapaneseNameLatinCandidatesBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameIn request;
    public JapaneseNameLatinCandidatesBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameIn request) {
        this.request = request;
        return this;
    }
    public JapaneseNameLatinCandidatesBatchSecurity security;
    public JapaneseNameLatinCandidatesBatchRequest withSecurity(JapaneseNameLatinCandidatesBatchSecurity security) {
        this.security = security;
        return this;
    }
}