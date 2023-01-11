package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAndSearchMediaItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_time")
    public String endTime;
    public ListAndSearchMediaItemsQueryParams withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public ListAndSearchMediaItemsOrderEnum order;
    public ListAndSearchMediaItemsQueryParams withOrder(ListAndSearchMediaItemsOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_index")
    public Long pageIndex;
    public ListAndSearchMediaItemsQueryParams withPageIndex(Long pageIndex) {
        this.pageIndex = pageIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListAndSearchMediaItemsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_time")
    public String startTime;
    public ListAndSearchMediaItemsQueryParams withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}