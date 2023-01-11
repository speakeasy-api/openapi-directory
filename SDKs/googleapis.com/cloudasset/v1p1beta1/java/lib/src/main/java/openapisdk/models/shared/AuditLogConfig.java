package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuditLogConfig
 * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
**/
public class AuditLogConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptedMembers")
    public String[] exemptedMembers;
    public AuditLogConfig withExemptedMembers(String[] exemptedMembers) {
        this.exemptedMembers = exemptedMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logType")
    public AuditLogConfigLogTypeEnum logType;
    public AuditLogConfig withLogType(AuditLogConfigLogTypeEnum logType) {
        this.logType = logType;
        return this;
    }
}