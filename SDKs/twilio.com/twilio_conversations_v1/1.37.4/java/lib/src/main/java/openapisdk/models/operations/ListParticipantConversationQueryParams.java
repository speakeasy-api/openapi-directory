package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListParticipantConversationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Address")
    public String address;
    public ListParticipantConversationQueryParams withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public ListParticipantConversationQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListParticipantConversationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}