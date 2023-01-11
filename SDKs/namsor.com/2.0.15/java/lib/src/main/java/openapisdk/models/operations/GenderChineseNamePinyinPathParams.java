package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderChineseNamePinyinPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseGivenNameLatin")
    public String chineseGivenNameLatin;
    public GenderChineseNamePinyinPathParams withChineseGivenNameLatin(String chineseGivenNameLatin) {
        this.chineseGivenNameLatin = chineseGivenNameLatin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseSurnameLatin")
    public String chineseSurnameLatin;
    public GenderChineseNamePinyinPathParams withChineseSurnameLatin(String chineseSurnameLatin) {
        this.chineseSurnameLatin = chineseSurnameLatin;
        return this;
    }
}