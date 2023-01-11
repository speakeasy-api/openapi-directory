package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MemberElectionCreateRequest {
    @JsonProperty("member_id")
    public String memberId;
    public MemberElectionCreateRequest withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @JsonProperty("member_type")
    public MemberElectionCreateRequestMemberTypeEnum memberType;
    public MemberElectionCreateRequest withMemberType(MemberElectionCreateRequestMemberTypeEnum memberType) {
        this.memberType = memberType;
        return this;
    }
    @JsonProperty("status")
    public MemberElectionCreateRequestStatusEnum status;
    public MemberElectionCreateRequest withStatus(MemberElectionCreateRequestStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public Double volume;
    public MemberElectionCreateRequest withVolume(Double volume) {
        this.volume = volume;
        return this;
    }
}