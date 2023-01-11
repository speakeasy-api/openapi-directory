package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChineseNameGenderCandidatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseGivenNameLatin")
    public String chineseGivenNameLatin;
    public ChineseNameGenderCandidatesPathParams withChineseGivenNameLatin(String chineseGivenNameLatin) {
        this.chineseGivenNameLatin = chineseGivenNameLatin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseSurnameLatin")
    public String chineseSurnameLatin;
    public ChineseNameGenderCandidatesPathParams withChineseSurnameLatin(String chineseSurnameLatin) {
        this.chineseSurnameLatin = chineseSurnameLatin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=knownGender")
    public String knownGender;
    public ChineseNameGenderCandidatesPathParams withKnownGender(String knownGender) {
        this.knownGender = knownGender;
        return this;
    }
}