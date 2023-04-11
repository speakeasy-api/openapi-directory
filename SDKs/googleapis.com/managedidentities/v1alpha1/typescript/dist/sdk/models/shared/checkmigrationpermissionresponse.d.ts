import { SpeakeasyBase } from "../../../internal/utils";
import { OnPremDomainSIDDetails } from "./onpremdomainsiddetails";
/**
 * The state of DomainMigration.
 */
export declare enum CheckMigrationPermissionResponseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    NeedsMaintenance = "NEEDS_MAINTENANCE"
}
/**
 * CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method.
 */
export declare class CheckMigrationPermissionResponse extends SpeakeasyBase {
    /**
     * The state of SID filtering of all the domains which has trust established.
     */
    onpremDomains?: OnPremDomainSIDDetails[];
    /**
     * The state of DomainMigration.
     */
    state?: CheckMigrationPermissionResponseStateEnum;
}
