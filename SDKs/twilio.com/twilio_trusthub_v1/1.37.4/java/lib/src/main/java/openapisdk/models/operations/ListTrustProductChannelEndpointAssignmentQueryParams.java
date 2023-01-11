package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrustProductChannelEndpointAssignmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ChannelEndpointSid")
    public String channelEndpointSid;
    public ListTrustProductChannelEndpointAssignmentQueryParams withChannelEndpointSid(String channelEndpointSid) {
        this.channelEndpointSid = channelEndpointSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ChannelEndpointSids")
    public String channelEndpointSids;
    public ListTrustProductChannelEndpointAssignmentQueryParams withChannelEndpointSids(String channelEndpointSids) {
        this.channelEndpointSids = channelEndpointSids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTrustProductChannelEndpointAssignmentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}