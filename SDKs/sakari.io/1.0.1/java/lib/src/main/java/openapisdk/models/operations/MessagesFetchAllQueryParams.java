package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesFetchAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contactId")
    public String contactId;
    public MessagesFetchAllQueryParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conversationId")
    public String conversationId;
    public MessagesFetchAllQueryParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public MessagesFetchAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public MessagesFetchAllQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}