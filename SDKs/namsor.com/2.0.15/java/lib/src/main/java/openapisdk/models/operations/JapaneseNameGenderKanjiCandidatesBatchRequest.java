package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JapaneseNameGenderKanjiCandidatesBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameGenderIn request;
    public JapaneseNameGenderKanjiCandidatesBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameGenderIn request) {
        this.request = request;
        return this;
    }
    public JapaneseNameGenderKanjiCandidatesBatchSecurity security;
    public JapaneseNameGenderKanjiCandidatesBatchRequest withSecurity(JapaneseNameGenderKanjiCandidatesBatchSecurity security) {
        this.security = security;
        return this;
    }
}