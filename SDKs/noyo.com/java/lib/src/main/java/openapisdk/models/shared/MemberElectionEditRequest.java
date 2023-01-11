package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MemberElectionEditRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_id")
    public String planId;
    public MemberElectionEditRequest withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public MemberElectionEditRequestStatusEnum status;
    public MemberElectionEditRequest withStatus(MemberElectionEditRequestStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public Double volume;
    public MemberElectionEditRequest withVolume(Double volume) {
        this.volume = volume;
        return this;
    }
}