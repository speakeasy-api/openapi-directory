package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceParticipantConversationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Address")
    public String address;
    public ListServiceParticipantConversationQueryParams withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public ListServiceParticipantConversationQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListServiceParticipantConversationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}