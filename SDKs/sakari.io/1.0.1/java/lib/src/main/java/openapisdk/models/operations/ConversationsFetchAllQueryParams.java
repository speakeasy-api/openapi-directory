package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConversationsFetchAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ConversationsFetchAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ConversationsFetchAllQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}