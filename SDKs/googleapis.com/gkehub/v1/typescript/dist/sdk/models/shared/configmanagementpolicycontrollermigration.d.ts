import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Stage of the migration.
 */
export declare enum ConfigManagementPolicyControllerMigrationStageEnum {
    StageUnspecified = "STAGE_UNSPECIFIED",
    AcmManaged = "ACM_MANAGED",
    PocoManaged = "POCO_MANAGED"
}
/**
 * State for the migration of PolicyController from ACM -> PoCo Hub.
 */
export declare class ConfigManagementPolicyControllerMigration extends SpeakeasyBase {
    /**
     * Stage of the migration.
     */
    stage?: ConfigManagementPolicyControllerMigrationStageEnum;
}
