import { SpeakeasyBase } from "../../../internal/utils";
import { AppTotal } from "./apptotal";
import { DataTotal } from "./datatotal";
/**
 * The total number of events for a particular field
 */
export declare class Total extends SpeakeasyBase {
    /**
     * The totals for the app
     */
    apps: AppTotal;
    /**
     * The end date for this total (in millis)
     */
    end?: number;
    /**
     * The start date for this total (in millis)
     */
    start?: number;
    /**
     * The totals for the field
     */
    totals: DataTotal;
}
