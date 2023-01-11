package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInteractionChannelInviteListInteractionChannelInviteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invites")
    public openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelInvite[] invites;
    public ListInteractionChannelInviteListInteractionChannelInviteResponse withInvites(openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelInvite[] invites) {
        this.invites = invites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListInteractionChannelInviteListInteractionChannelInviteResponseMeta meta;
    public ListInteractionChannelInviteListInteractionChannelInviteResponse withMeta(ListInteractionChannelInviteListInteractionChannelInviteResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}