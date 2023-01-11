package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=page_num")
    public Long pageNum;
    public GetTeamsSimplePathParams withPageNum(Long pageNum) {
        this.pageNum = pageNum;
        return this;
    }
}