package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=page_num")
    public Long pageNum;
    public GetTeamsKeysPathParams withPageNum(Long pageNum) {
        this.pageNum = pageNum;
        return this;
    }
}