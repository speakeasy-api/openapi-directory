import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementTag } from "./placementtag";
/**
 * Placement GenerateTags Response
 */
export declare class PlacementsGenerateTagsResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse".
     */
    kind?: string;
    /**
     * Set of generated tags for the specified placements.
     */
    placementTags?: PlacementTag[];
}
