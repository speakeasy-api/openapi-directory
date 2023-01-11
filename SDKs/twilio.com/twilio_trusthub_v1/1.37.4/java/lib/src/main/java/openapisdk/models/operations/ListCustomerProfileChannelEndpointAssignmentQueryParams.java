package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomerProfileChannelEndpointAssignmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ChannelEndpointSid")
    public String channelEndpointSid;
    public ListCustomerProfileChannelEndpointAssignmentQueryParams withChannelEndpointSid(String channelEndpointSid) {
        this.channelEndpointSid = channelEndpointSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ChannelEndpointSids")
    public String channelEndpointSids;
    public ListCustomerProfileChannelEndpointAssignmentQueryParams withChannelEndpointSids(String channelEndpointSids) {
        this.channelEndpointSids = channelEndpointSids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCustomerProfileChannelEndpointAssignmentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}