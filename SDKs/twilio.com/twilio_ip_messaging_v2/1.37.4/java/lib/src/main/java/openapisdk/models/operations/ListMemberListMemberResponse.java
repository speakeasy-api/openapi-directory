package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMemberListMemberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public openapisdk.models.shared.IpMessagingV2ServiceChannelMember[] members;
    public ListMemberListMemberResponse withMembers(openapisdk.models.shared.IpMessagingV2ServiceChannelMember[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMemberListMemberResponseMeta meta;
    public ListMemberListMemberResponse withMeta(ListMemberListMemberResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}