package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JapaneseNameKanjiCandidates1Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public JapaneseNameKanjiCandidates1Security withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}