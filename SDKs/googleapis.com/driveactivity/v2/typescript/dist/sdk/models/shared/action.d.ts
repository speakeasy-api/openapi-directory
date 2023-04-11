import { SpeakeasyBase } from "../../../internal/utils";
import { ActionDetail } from "./actiondetail";
import { Actor } from "./actor";
import { Target } from "./target";
import { TimeRange } from "./timerange";
/**
 * Information about the action.
 */
export declare class Action extends SpeakeasyBase {
    /**
     * The actor of a Drive activity.
     */
    actor?: Actor;
    /**
     * Data describing the type and additional information of an action.
     */
    detail?: ActionDetail;
    /**
     * Information about the target of activity. For more information on how activity history is shared with users, see [Activity history visibility](https://developers.google.com/drive/activity/v2#activityhistory).
     */
    target?: Target;
    /**
     * Information about time ranges.
     */
    timeRange?: TimeRange;
    /**
     * The action occurred at this specific time.
     */
    timestamp?: string;
}
