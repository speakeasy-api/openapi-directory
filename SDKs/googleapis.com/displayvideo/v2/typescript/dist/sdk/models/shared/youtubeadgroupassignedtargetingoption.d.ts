import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Wrapper object associating an assigned_targeting_option resource and the youtube ad group it is assigned to.
 */
export declare class YoutubeAdGroupAssignedTargetingOption extends SpeakeasyBase {
    /**
     * A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
     */
    assignedTargetingOption?: AssignedTargetingOption;
    /**
     * The ID of the youtube ad group the assigned targeting option is assigned to.
     */
    youtubeAdGroupId?: string;
}
