import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the asset. <ul>
 *
 * @remarks
 *   <li>`importing` - the asset is being copied to the hosting service</li>
 *   <li>`ready` - the asset is ready to be served to users</li>
 *   <li>`failed` - the asset failed to copy or delete</li>
 *   <li>`deleted` - the asset has been deleted</li>
 * </ul>
 */
export declare enum AssetResponseAttributesStatusEnum {
    Importing = "importing",
    Ready = "ready",
    Failed = "failed",
    Deleted = "deleted"
}
/**
 * The list of asset attributes and their values.
 */
export declare class AssetResponseAttributes extends SpeakeasyBase {
    /**
     * The time the asset was created.
     */
    created?: string;
    /**
     * The asset file name.
     */
    filename?: string;
    /**
     * The unique id of the hosted asset in UUID format.
     */
    id?: string;
    /**
     * The owner id of the render task.
     */
    owner?: string;
    /**
     * The region the asset is hosted, currently only `au` (Australia).
     */
    region?: string;
    /**
     * The original render id that created the asset in UUID format. Multiple assets can share the same render id.
     */
    renderId?: string;
    /**
     * The status of the asset. <ul>
     *
     * @remarks
     *   <li>`importing` - the asset is being copied to the hosting service</li>
     *   <li>`ready` - the asset is ready to be served to users</li>
     *   <li>`failed` - the asset failed to copy or delete</li>
     *   <li>`deleted` - the asset has been deleted</li>
     * </ul>
     */
    status?: AssetResponseAttributesStatusEnum;
    /**
     * The time the asset status was last updated.
     */
    updated?: string;
    /**
     * The asset file name.
     */
    url?: string;
}
