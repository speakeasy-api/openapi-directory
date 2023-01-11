package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveNeoFeedTodayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=detailed")
    public Boolean detailed;
    public RetrieveNeoFeedTodayQueryParams withDetailed(Boolean detailed) {
        this.detailed = detailed;
        return this;
    }
}