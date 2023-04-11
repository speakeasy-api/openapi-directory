import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * State change of the asset between the points in time.
 */
export declare enum ListAssetsResultStateChangeEnum {
    Unused = "UNUSED",
    Added = "ADDED",
    Removed = "REMOVED",
    Active = "ACTIVE"
}
/**
 * Result containing the Asset and its State.
 */
export declare class ListAssetsResult extends SpeakeasyBase {
    /**
     * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
     */
    asset?: Asset;
    /**
     * State change of the asset between the points in time.
     */
    stateChange?: ListAssetsResultStateChangeEnum;
}
