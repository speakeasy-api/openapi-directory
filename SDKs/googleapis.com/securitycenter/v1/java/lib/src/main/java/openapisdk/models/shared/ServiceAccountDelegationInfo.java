package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceAccountDelegationInfo
 * Identity delegation history of an authenticated service account.
**/
public class ServiceAccountDelegationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalEmail")
    public String principalEmail;
    public ServiceAccountDelegationInfo withPrincipalEmail(String principalEmail) {
        this.principalEmail = principalEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalSubject")
    public String principalSubject;
    public ServiceAccountDelegationInfo withPrincipalSubject(String principalSubject) {
        this.principalSubject = principalSubject;
        return this;
    }
}