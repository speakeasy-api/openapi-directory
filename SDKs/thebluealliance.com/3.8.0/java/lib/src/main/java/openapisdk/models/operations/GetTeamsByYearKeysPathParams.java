package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsByYearKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=page_num")
    public Long pageNum;
    public GetTeamsByYearKeysPathParams withPageNum(Long pageNum) {
        this.pageNum = pageNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetTeamsByYearKeysPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}