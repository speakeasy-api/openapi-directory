package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncSyncMapItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Bounds")
    public openapisdk.models.shared.SyncMapItemEnumQueryFromBoundTypeEnum bounds;
    public ListSyncSyncMapItemQueryParams withBounds(openapisdk.models.shared.SyncMapItemEnumQueryFromBoundTypeEnum bounds) {
        this.bounds = bounds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=From")
    public String from;
    public ListSyncSyncMapItemQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.SyncMapItemEnumQueryResultOrderEnum order;
    public ListSyncSyncMapItemQueryParams withOrder(openapisdk.models.shared.SyncMapItemEnumQueryResultOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncSyncMapItemQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}