package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncSyncListItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Bounds")
    public openapisdk.models.shared.SyncListItemEnumQueryFromBoundTypeEnum bounds;
    public ListSyncSyncListItemQueryParams withBounds(openapisdk.models.shared.SyncListItemEnumQueryFromBoundTypeEnum bounds) {
        this.bounds = bounds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=From")
    public String from;
    public ListSyncSyncListItemQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.SyncListItemEnumQueryResultOrderEnum order;
    public ListSyncSyncListItemQueryParams withOrder(openapisdk.models.shared.SyncListItemEnumQueryResultOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncSyncListItemQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}