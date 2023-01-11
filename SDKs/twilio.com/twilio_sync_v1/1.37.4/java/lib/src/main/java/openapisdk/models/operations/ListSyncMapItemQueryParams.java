package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncMapItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Bounds")
    public openapisdk.models.shared.SyncMapItemEnumQueryFromBoundTypeEnum bounds;
    public ListSyncMapItemQueryParams withBounds(openapisdk.models.shared.SyncMapItemEnumQueryFromBoundTypeEnum bounds) {
        this.bounds = bounds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=From")
    public String from;
    public ListSyncMapItemQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.SyncMapItemEnumQueryResultOrderEnum order;
    public ListSyncMapItemQueryParams withOrder(openapisdk.models.shared.SyncMapItemEnumQueryResultOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncMapItemQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}