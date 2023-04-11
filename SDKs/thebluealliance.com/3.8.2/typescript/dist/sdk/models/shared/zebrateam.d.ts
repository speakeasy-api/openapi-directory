import { SpeakeasyBase } from "../../../internal/utils";
export declare class ZebraTeam extends SpeakeasyBase {
    /**
     * The TBA team key for the Zebra MotionWorks data.
     */
    teamKey: string;
    /**
     * A list containing doubles and nulls representing a teams X position in feet at the corresponding timestamp. A null value represents no tracking data for a given timestamp.
     */
    xs: number[];
    /**
     * A list containing doubles and nulls representing a teams Y position in feet at the corresponding timestamp. A null value represents no tracking data for a given timestamp.
     */
    ys: number[];
}
