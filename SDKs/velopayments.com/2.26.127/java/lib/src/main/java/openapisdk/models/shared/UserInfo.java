package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfa_details")
    public MfaDetails mfaDetails;
    public UserInfo withMfaDetails(MfaDetails mfaDetails) {
        this.mfaDetails = mfaDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userType")
    public UserType2Enum userType;
    public UserInfo withUserType(UserType2Enum userType) {
        this.userType = userType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public UserInfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}