package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JapaneseNameKanjiCandidatesBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameIn request;
    public JapaneseNameKanjiCandidatesBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameIn request) {
        this.request = request;
        return this;
    }
    public JapaneseNameKanjiCandidatesBatchSecurity security;
    public JapaneseNameKanjiCandidatesBatchRequest withSecurity(JapaneseNameKanjiCandidatesBatchSecurity security) {
        this.security = security;
        return this;
    }
}