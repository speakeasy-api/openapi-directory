package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApproveApprovalRequestMessage
 * Request to approve an ApprovalRequest.
**/
public class ApproveApprovalRequestMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public ApproveApprovalRequestMessage withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
}