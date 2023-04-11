import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The log type that this config enables.
 */
export declare enum ApigatewayAuditLogConfigLogTypeEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    AdminRead = "ADMIN_READ",
    DataWrite = "DATA_WRITE",
    DataRead = "DATA_READ"
}
/**
 * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
 */
export declare class ApigatewayAuditLogConfig extends SpeakeasyBase {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];
    /**
     * The log type that this config enables.
     */
    logType?: ApigatewayAuditLogConfigLogTypeEnum;
}
