package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JapaneseNameKanjiCandidatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseGivenNameLatin")
    public String japaneseGivenNameLatin;
    public JapaneseNameKanjiCandidatesPathParams withJapaneseGivenNameLatin(String japaneseGivenNameLatin) {
        this.japaneseGivenNameLatin = japaneseGivenNameLatin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseSurnameLatin")
    public String japaneseSurnameLatin;
    public JapaneseNameKanjiCandidatesPathParams withJapaneseSurnameLatin(String japaneseSurnameLatin) {
        this.japaneseSurnameLatin = japaneseSurnameLatin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=knownGender")
    public String knownGender;
    public JapaneseNameKanjiCandidatesPathParams withKnownGender(String knownGender) {
        this.knownGender = knownGender;
        return this;
    }
}