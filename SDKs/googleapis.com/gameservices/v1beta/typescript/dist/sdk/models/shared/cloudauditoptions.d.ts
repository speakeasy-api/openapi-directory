import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationLoggingOptions } from "./authorizationloggingoptions";
/**
 * The log_name to populate in the Cloud Audit Record.
 */
export declare enum CloudAuditOptionsLogNameEnum {
    UnspecifiedLogName = "UNSPECIFIED_LOG_NAME",
    AdminActivity = "ADMIN_ACTIVITY",
    DataAccess = "DATA_ACCESS"
}
/**
 * Write a Cloud Audit log
 */
export declare class CloudAuditOptions extends SpeakeasyBase {
    /**
     * Authorization-related information used by Cloud Audit Logging.
     */
    authorizationLoggingOptions?: AuthorizationLoggingOptions;
    /**
     * The log_name to populate in the Cloud Audit Record.
     */
    logName?: CloudAuditOptionsLogNameEnum;
}
