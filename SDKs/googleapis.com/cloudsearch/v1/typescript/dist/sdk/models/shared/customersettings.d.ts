import { SpeakeasyBase } from "../../../internal/utils";
import { AuditLoggingSettings } from "./auditloggingsettings";
import { VPCSettings } from "./vpcsettings";
/**
 * Represents settings at a customer level.
 */
export declare class CustomerSettings extends SpeakeasyBase {
    /**
     * Represents the settings for Cloud audit logging
     */
    auditLoggingSettings?: AuditLoggingSettings;
    vpcSettings?: VPCSettings;
}
