import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of placement.
 */
export declare enum PlacementPolicyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Compact = "COMPACT"
}
/**
 * PlacementPolicy defines the placement policy used by the node pool.
 */
export declare class PlacementPolicy extends SpeakeasyBase {
    /**
     * The type of placement.
     */
    type?: PlacementPolicyTypeEnum;
}
