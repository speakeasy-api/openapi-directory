package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceConversationMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.ServiceConversationMessageEnumOrderTypeEnum order;
    public ListServiceConversationMessageQueryParams withOrder(openapisdk.models.shared.ServiceConversationMessageEnumOrderTypeEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListServiceConversationMessageQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}