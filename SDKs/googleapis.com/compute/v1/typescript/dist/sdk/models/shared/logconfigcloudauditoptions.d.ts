import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationLoggingOptions } from "./authorizationloggingoptions";
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare enum LogConfigCloudAuditOptionsLogNameEnum {
    AdminActivity = "ADMIN_ACTIVITY",
    DataAccess = "DATA_ACCESS",
    UnspecifiedLogName = "UNSPECIFIED_LOG_NAME"
}
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare class LogConfigCloudAuditOptions extends SpeakeasyBase {
    /**
     * This is deprecated and has no effect. Do not use.
     */
    authorizationLoggingOptions?: AuthorizationLoggingOptions;
    /**
     * This is deprecated and has no effect. Do not use.
     */
    logName?: LogConfigCloudAuditOptionsLogNameEnum;
}
