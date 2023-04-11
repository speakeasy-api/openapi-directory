import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { ActionDetail } from "./actiondetail";
import { Actor } from "./actor";
import { Target } from "./target";
import { TimeRange } from "./timerange";
/**
 * A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
 */
export declare class DriveActivity extends SpeakeasyBase {
    /**
     * Details on all actions in this activity.
     */
    actions?: Action[];
    /**
     * All actor(s) responsible for the activity.
     */
    actors?: Actor[];
    /**
     * Data describing the type and additional information of an action.
     */
    primaryActionDetail?: ActionDetail;
    /**
     * All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target immediately after the actions occurred.
     */
    targets?: Target[];
    /**
     * Information about time ranges.
     */
    timeRange?: TimeRange;
    /**
     * The activity occurred at this specific time.
     */
    timestamp?: string;
}
