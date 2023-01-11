package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudAuditOptions
 * Write a Cloud Audit log
**/
public class CloudAuditOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationLoggingOptions")
    public AuthorizationLoggingOptions authorizationLoggingOptions;
    public CloudAuditOptions withAuthorizationLoggingOptions(AuthorizationLoggingOptions authorizationLoggingOptions) {
        this.authorizationLoggingOptions = authorizationLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logName")
    public CloudAuditOptionsLogNameEnum logName;
    public CloudAuditOptions withLogName(CloudAuditOptionsLogNameEnum logName) {
        this.logName = logName;
        return this;
    }
}