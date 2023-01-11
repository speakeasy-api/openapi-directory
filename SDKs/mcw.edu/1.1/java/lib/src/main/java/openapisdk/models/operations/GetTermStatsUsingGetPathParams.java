package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTermStatsUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetTermStatsUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterAccId")
    public String filterAccId;
    public GetTermStatsUsingGetPathParams withFilterAccId(String filterAccId) {
        this.filterAccId = filterAccId;
        return this;
    }
}