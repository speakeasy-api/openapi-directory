package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConversationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_end")
    public String dateEnd;
    public ListConversationsQueryParams withDateEnd(String dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_start")
    public String dateStart;
    public ListConversationsQueryParams withDateStart(String dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public openapisdk.models.shared.OrderEnum order;
    public ListConversationsQueryParams withOrder(openapisdk.models.shared.OrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Double pageSize;
    public ListConversationsQueryParams withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=record_index")
    public Double recordIndex;
    public ListConversationsQueryParams withRecordIndex(Double recordIndex) {
        this.recordIndex = recordIndex;
        return this;
    }
}