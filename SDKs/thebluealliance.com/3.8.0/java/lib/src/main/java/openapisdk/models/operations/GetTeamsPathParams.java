package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=page_num")
    public Long pageNum;
    public GetTeamsPathParams withPageNum(Long pageNum) {
        this.pageNum = pageNum;
        return this;
    }
}