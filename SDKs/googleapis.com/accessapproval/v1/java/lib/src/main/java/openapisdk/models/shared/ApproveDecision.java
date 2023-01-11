package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApproveDecision
 * A decision that has been made to approve access to a resource.
**/
public class ApproveDecision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approveTime")
    public String approveTime;
    public ApproveDecision withApproveTime(String approveTime) {
        this.approveTime = approveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoApproved")
    public Boolean autoApproved;
    public ApproveDecision withAutoApproved(Boolean autoApproved) {
        this.autoApproved = autoApproved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public ApproveDecision withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalidateTime")
    public String invalidateTime;
    public ApproveDecision withInvalidateTime(String invalidateTime) {
        this.invalidateTime = invalidateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureInfo")
    public SignatureInfo signatureInfo;
    public ApproveDecision withSignatureInfo(SignatureInfo signatureInfo) {
        this.signatureInfo = signatureInfo;
        return this;
    }
}