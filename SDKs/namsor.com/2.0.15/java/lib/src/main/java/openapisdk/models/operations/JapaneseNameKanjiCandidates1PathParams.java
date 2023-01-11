package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JapaneseNameKanjiCandidates1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseGivenNameLatin")
    public String japaneseGivenNameLatin;
    public JapaneseNameKanjiCandidates1PathParams withJapaneseGivenNameLatin(String japaneseGivenNameLatin) {
        this.japaneseGivenNameLatin = japaneseGivenNameLatin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseSurnameLatin")
    public String japaneseSurnameLatin;
    public JapaneseNameKanjiCandidates1PathParams withJapaneseSurnameLatin(String japaneseSurnameLatin) {
        this.japaneseSurnameLatin = japaneseSurnameLatin;
        return this;
    }
}