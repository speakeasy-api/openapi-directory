package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderChineseNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chineseName")
    public String chineseName;
    public GenderChineseNamePathParams withChineseName(String chineseName) {
        this.chineseName = chineseName;
        return this;
    }
}