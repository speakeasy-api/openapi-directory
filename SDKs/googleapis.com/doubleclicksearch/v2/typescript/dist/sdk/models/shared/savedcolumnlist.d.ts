import { SpeakeasyBase } from "../../../internal/utils";
import { SavedColumn } from "./savedcolumn";
/**
 * A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.
 */
export declare class SavedColumnList extends SpeakeasyBase {
    /**
     * The saved columns being requested.
     */
    items?: SavedColumn[];
    /**
     * Identifies this as a SavedColumnList resource. Value: the fixed string doubleclicksearch#savedColumnList.
     */
    kind?: string;
}
