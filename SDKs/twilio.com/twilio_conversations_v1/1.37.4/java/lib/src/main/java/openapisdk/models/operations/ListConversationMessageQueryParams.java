package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConversationMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.ConversationMessageEnumOrderTypeEnum order;
    public ListConversationMessageQueryParams withOrder(openapisdk.models.shared.ConversationMessageEnumOrderTypeEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConversationMessageQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}