package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Access
 * Represents an access event.
**/
public class Access {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callerIp")
    public String callerIp;
    public Access withCallerIp(String callerIp) {
        this.callerIp = callerIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callerIpGeo")
    public Geolocation callerIpGeo;
    public Access withCallerIpGeo(Geolocation callerIpGeo) {
        this.callerIpGeo = callerIpGeo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodName")
    public String methodName;
    public Access withMethodName(String methodName) {
        this.methodName = methodName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalEmail")
    public String principalEmail;
    public Access withPrincipalEmail(String principalEmail) {
        this.principalEmail = principalEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalSubject")
    public String principalSubject;
    public Access withPrincipalSubject(String principalSubject) {
        this.principalSubject = principalSubject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountDelegationInfo")
    public ServiceAccountDelegationInfo[] serviceAccountDelegationInfo;
    public Access withServiceAccountDelegationInfo(ServiceAccountDelegationInfo[] serviceAccountDelegationInfo) {
        this.serviceAccountDelegationInfo = serviceAccountDelegationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountKeyName")
    public String serviceAccountKeyName;
    public Access withServiceAccountKeyName(String serviceAccountKeyName) {
        this.serviceAccountKeyName = serviceAccountKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public Access withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgentFamily")
    public String userAgentFamily;
    public Access withUserAgentFamily(String userAgentFamily) {
        this.userAgentFamily = userAgentFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userName")
    public String userName;
    public Access withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}