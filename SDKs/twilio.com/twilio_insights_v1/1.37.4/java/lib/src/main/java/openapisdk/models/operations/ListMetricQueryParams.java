package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMetricQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Direction")
    public openapisdk.models.shared.MetricEnumStreamDirectionEnum direction;
    public ListMetricQueryParams withDirection(openapisdk.models.shared.MetricEnumStreamDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Edge")
    public openapisdk.models.shared.MetricEnumTwilioEdgeEnum edge;
    public ListMetricQueryParams withEdge(openapisdk.models.shared.MetricEnumTwilioEdgeEnum edge) {
        this.edge = edge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMetricQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}