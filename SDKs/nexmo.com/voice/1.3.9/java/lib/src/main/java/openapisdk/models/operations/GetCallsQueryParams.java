package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCallsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conversation_uuid")
    public String conversationUuid;
    public GetCallsQueryParams withConversationUuid(String conversationUuid) {
        this.conversationUuid = conversationUuid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_end")
    public OffsetDateTime dateEnd;
    public GetCallsQueryParams withDateEnd(OffsetDateTime dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_start")
    public OffsetDateTime dateStart;
    public GetCallsQueryParams withDateStart(OffsetDateTime dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetCallsOrderEnum order;
    public GetCallsQueryParams withOrder(GetCallsOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetCallsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=record_index")
    public Long recordIndex;
    public GetCallsQueryParams withRecordIndex(Long recordIndex) {
        this.recordIndex = recordIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetCallsStatusEnum status;
    public GetCallsQueryParams withStatus(GetCallsStatusEnum status) {
        this.status = status;
        return this;
    }
}