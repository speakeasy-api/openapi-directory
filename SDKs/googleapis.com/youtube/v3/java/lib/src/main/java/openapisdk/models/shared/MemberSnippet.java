package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MemberSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorChannelId")
    public String creatorChannelId;
    public MemberSnippet withCreatorChannelId(String creatorChannelId) {
        this.creatorChannelId = creatorChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberDetails")
    public ChannelProfileDetails memberDetails;
    public MemberSnippet withMemberDetails(ChannelProfileDetails memberDetails) {
        this.memberDetails = memberDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipsDetails")
    public MembershipsDetails membershipsDetails;
    public MemberSnippet withMembershipsDetails(MembershipsDetails membershipsDetails) {
        this.membershipsDetails = membershipsDetails;
        return this;
    }
}