import { SpeakeasyBase } from "../../../internal/utils";
export declare class DriveTimeBreak extends SpeakeasyBase {
    /**
     * Specifies the duration of the break in seconds.
     */
    duration: number;
    /**
     * Specifies the initial (current) driving time of a driver to allow dynamic adaptations in seconds.
     */
    initialDrivingTime?: number;
    /**
     * Specifies the max driving time (in a row) without break in seconds.
     */
    maxDrivingTime: number;
    /**
     * Array specifying how a break duration (in seconds) can be split into several smaller breaks
     */
    possibleSplit?: number[];
}
