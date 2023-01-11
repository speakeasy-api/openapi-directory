package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayAuditLogConfig
 * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
**/
public class ApigatewayAuditLogConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptedMembers")
    public String[] exemptedMembers;
    public ApigatewayAuditLogConfig withExemptedMembers(String[] exemptedMembers) {
        this.exemptedMembers = exemptedMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logType")
    public ApigatewayAuditLogConfigLogTypeEnum logType;
    public ApigatewayAuditLogConfig withLogType(ApigatewayAuditLogConfigLogTypeEnum logType) {
        this.logType = logType;
        return this;
    }
}