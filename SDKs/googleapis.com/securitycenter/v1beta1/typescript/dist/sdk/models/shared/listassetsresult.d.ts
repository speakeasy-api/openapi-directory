import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * State of the asset.
 */
export declare enum ListAssetsResultStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
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
     * State of the asset.
     */
    state?: ListAssetsResultStateEnum;
}
