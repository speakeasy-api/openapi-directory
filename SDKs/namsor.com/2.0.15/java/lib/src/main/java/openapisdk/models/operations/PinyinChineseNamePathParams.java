package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PinyinChineseNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseName")
    public String chineseName;
    public PinyinChineseNamePathParams withChineseName(String chineseName) {
        this.chineseName = chineseName;
        return this;
    }
}