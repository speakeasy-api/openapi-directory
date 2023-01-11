package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Edge")
    public openapisdk.models.shared.EventEnumTwilioEdgeEnum edge;
    public ListEventQueryParams withEdge(openapisdk.models.shared.EventEnumTwilioEdgeEnum edge) {
        this.edge = edge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListEventQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}