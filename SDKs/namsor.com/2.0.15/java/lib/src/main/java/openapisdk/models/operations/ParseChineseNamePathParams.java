package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseChineseNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseName")
    public String chineseName;
    public ParseChineseNamePathParams withChineseName(String chineseName) {
        this.chineseName = chineseName;
        return this;
    }
}