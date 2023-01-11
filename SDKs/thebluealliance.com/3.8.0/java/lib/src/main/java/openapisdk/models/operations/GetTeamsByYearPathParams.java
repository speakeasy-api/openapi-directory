package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsByYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=page_num")
    public Long pageNum;
    public GetTeamsByYearPathParams withPageNum(Long pageNum) {
        this.pageNum = pageNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetTeamsByYearPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}