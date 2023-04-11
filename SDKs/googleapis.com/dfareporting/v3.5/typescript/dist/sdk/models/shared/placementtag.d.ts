import { SpeakeasyBase } from "../../../internal/utils";
import { TagData } from "./tagdata";
/**
 * Placement Tag
 */
export declare class PlacementTag extends SpeakeasyBase {
    /**
     * Placement ID
     */
    placementId?: string;
    /**
     * Tags generated for this placement.
     */
    tagDatas?: TagData[];
}
