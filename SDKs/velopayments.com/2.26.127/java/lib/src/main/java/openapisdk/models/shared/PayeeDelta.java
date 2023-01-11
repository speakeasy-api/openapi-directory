package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayeeDelta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbaName")
    public String dbaName;
    public PayeeDelta withDbaName(String dbaName) {
        this.dbaName = dbaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PayeeDelta withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PayeeDelta withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onboardedStatus")
    public OnboardedStatus2Enum onboardedStatus;
    public PayeeDelta withOnboardedStatus(OnboardedStatus2Enum onboardedStatus) {
        this.onboardedStatus = onboardedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeCountry")
    public String payeeCountry;
    public PayeeDelta withPayeeCountry(String payeeCountry) {
        this.payeeCountry = payeeCountry;
        return this;
    }
    @JsonProperty("payeeId")
    public String payeeId;
    public PayeeDelta withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonProperty("remoteId")
    public String remoteId;
    public PayeeDelta withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
}