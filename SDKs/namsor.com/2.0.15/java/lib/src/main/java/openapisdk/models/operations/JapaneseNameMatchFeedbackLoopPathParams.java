package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JapaneseNameMatchFeedbackLoopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseGivenNameLatin")
    public String japaneseGivenNameLatin;
    public JapaneseNameMatchFeedbackLoopPathParams withJapaneseGivenNameLatin(String japaneseGivenNameLatin) {
        this.japaneseGivenNameLatin = japaneseGivenNameLatin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseName")
    public String japaneseName;
    public JapaneseNameMatchFeedbackLoopPathParams withJapaneseName(String japaneseName) {
        this.japaneseName = japaneseName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseSurnameLatin")
    public String japaneseSurnameLatin;
    public JapaneseNameMatchFeedbackLoopPathParams withJapaneseSurnameLatin(String japaneseSurnameLatin) {
        this.japaneseSurnameLatin = japaneseSurnameLatin;
        return this;
    }
}