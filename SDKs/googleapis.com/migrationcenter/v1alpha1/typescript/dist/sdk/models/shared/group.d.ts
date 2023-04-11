import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.
 */
export declare class Group extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the group was created.
     */
    createTime?: string;
    /**
     * The description of the resource.
     */
    description?: string;
    /**
     * User-friendly display name.
     */
    displayName?: string;
    /**
     * Labels as key value pairs.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The name of the group.
     */
    name?: string;
    /**
     * Output only. The timestamp when the group was last updated.
     */
    updateTime?: string;
}
/**
 * A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.
 */
export declare class GroupInput extends SpeakeasyBase {
    /**
     * The description of the resource.
     */
    description?: string;
    /**
     * User-friendly display name.
     */
    displayName?: string;
    /**
     * Labels as key value pairs.
     */
    labels?: Record<string, string>;
}
