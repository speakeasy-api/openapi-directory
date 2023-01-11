package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChineseNameCandidatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseGivenNameLatin")
    public String chineseGivenNameLatin;
    public ChineseNameCandidatesPathParams withChineseGivenNameLatin(String chineseGivenNameLatin) {
        this.chineseGivenNameLatin = chineseGivenNameLatin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseSurnameLatin")
    public String chineseSurnameLatin;
    public ChineseNameCandidatesPathParams withChineseSurnameLatin(String chineseSurnameLatin) {
        this.chineseSurnameLatin = chineseSurnameLatin;
        return this;
    }
}