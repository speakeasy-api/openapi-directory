package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MemberElectionResult {
    @JsonProperty("created")
    public Long created;
    public MemberElectionResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public MemberElectionResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("member_id")
    public String memberId;
    public MemberElectionResult withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @JsonProperty("member_type")
    public MemberElectionResultMemberTypeEnum memberType;
    public MemberElectionResult withMemberType(MemberElectionResultMemberTypeEnum memberType) {
        this.memberType = memberType;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public MemberElectionResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("plan_id")
    public String planId;
    public MemberElectionResult withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
    @JsonProperty("status")
    public MemberElectionResultStatusEnum status;
    public MemberElectionResult withStatus(MemberElectionResultStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public MemberElectionResult withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public Double volume;
    public MemberElectionResult withVolume(Double volume) {
        this.volume = volume;
        return this;
    }
}