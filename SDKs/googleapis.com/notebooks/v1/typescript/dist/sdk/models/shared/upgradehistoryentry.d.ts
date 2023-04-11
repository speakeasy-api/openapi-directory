import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Action. Rolloback or Upgrade.
 */
export declare enum UpgradeHistoryEntryActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Upgrade = "UPGRADE",
    Rollback = "ROLLBACK"
}
/**
 * The state of this instance upgrade history entry.
 */
export declare enum UpgradeHistoryEntryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Started = "STARTED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * The entry of VM image upgrade history.
 */
export declare class UpgradeHistoryEntry extends SpeakeasyBase {
    /**
     * Action. Rolloback or Upgrade.
     */
    action?: UpgradeHistoryEntryActionEnum;
    /**
     * The container image before this instance upgrade.
     */
    containerImage?: string;
    /**
     * The time that this instance upgrade history entry is created.
     */
    createTime?: string;
    /**
     * The framework of this notebook instance.
     */
    framework?: string;
    /**
     * The snapshot of the boot disk of this notebook instance before upgrade.
     */
    snapshot?: string;
    /**
     * The state of this instance upgrade history entry.
     */
    state?: UpgradeHistoryEntryStateEnum;
    /**
     * Target VM Image. Format: `ainotebooks-vm/project/image-name/name`.
     */
    targetImage?: string;
    /**
     * Target VM Version, like m63.
     */
    targetVersion?: string;
    /**
     * The version of the notebook instance before this upgrade.
     */
    version?: string;
    /**
     * The VM image before this instance upgrade.
     */
    vmImage?: string;
}
