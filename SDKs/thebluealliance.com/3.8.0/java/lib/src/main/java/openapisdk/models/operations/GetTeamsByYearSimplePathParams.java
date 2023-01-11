package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsByYearSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=page_num")
    public Long pageNum;
    public GetTeamsByYearSimplePathParams withPageNum(Long pageNum) {
        this.pageNum = pageNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetTeamsByYearSimplePathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}