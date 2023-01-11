package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInviteListInviteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invites")
    public openapisdk.models.shared.ChatV1ServiceChannelInvite[] invites;
    public ListInviteListInviteResponse withInvites(openapisdk.models.shared.ChatV1ServiceChannelInvite[] invites) {
        this.invites = invites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListInviteListInviteResponseMeta meta;
    public ListInviteListInviteResponse withMeta(ListInviteListInviteResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}