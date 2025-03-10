package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChineseNameMatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseGivenNameLatin")
    public String chineseGivenNameLatin;
    public ChineseNameMatchPathParams withChineseGivenNameLatin(String chineseGivenNameLatin) {
        this.chineseGivenNameLatin = chineseGivenNameLatin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseName")
    public String chineseName;
    public ChineseNameMatchPathParams withChineseName(String chineseName) {
        this.chineseName = chineseName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseSurnameLatin")
    public String chineseSurnameLatin;
    public ChineseNameMatchPathParams withChineseSurnameLatin(String chineseSurnameLatin) {
        this.chineseSurnameLatin = chineseSurnameLatin;
        return this;
    }
}