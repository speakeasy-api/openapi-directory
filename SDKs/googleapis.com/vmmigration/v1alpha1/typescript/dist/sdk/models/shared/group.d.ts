import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
 */
export declare class Group extends SpeakeasyBase {
    /**
     * Output only. The create time timestamp.
     */
    createTime?: string;
    /**
     * User-provided description of the group.
     */
    description?: string;
    /**
     * Display name is a user defined name for this group which can be updated.
     */
    displayName?: string;
    /**
     * Output only. The Group name.
     */
    name?: string;
    /**
     * Output only. The update time timestamp.
     */
    updateTime?: string;
}
/**
 * Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
 */
export declare class GroupInput extends SpeakeasyBase {
    /**
     * User-provided description of the group.
     */
    description?: string;
    /**
     * Display name is a user defined name for this group which can be updated.
     */
    displayName?: string;
}
