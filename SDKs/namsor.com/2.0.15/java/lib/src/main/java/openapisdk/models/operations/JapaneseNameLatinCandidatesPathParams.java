package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JapaneseNameLatinCandidatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseGivenNameKanji")
    public String japaneseGivenNameKanji;
    public JapaneseNameLatinCandidatesPathParams withJapaneseGivenNameKanji(String japaneseGivenNameKanji) {
        this.japaneseGivenNameKanji = japaneseGivenNameKanji;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseSurnameKanji")
    public String japaneseSurnameKanji;
    public JapaneseNameLatinCandidatesPathParams withJapaneseSurnameKanji(String japaneseSurnameKanji) {
        this.japaneseSurnameKanji = japaneseSurnameKanji;
        return this;
    }
}