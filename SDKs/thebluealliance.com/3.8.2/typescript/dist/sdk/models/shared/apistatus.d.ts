import { SpeakeasyBase } from "../../../internal/utils";
import { APIStatusAppVersion } from "./apistatusappversion";
/**
 * Successful response
 */
export declare class APIStatus extends SpeakeasyBase {
    android: APIStatusAppVersion;
    /**
     * Year of the current FRC season.
     */
    currentSeason: number;
    /**
     * An array of strings containing event keys of any active events that are no longer updating.
     */
    downEvents: string[];
    ios: APIStatusAppVersion;
    /**
     * True if the entire FMS API provided by FIRST is down.
     */
    isDatafeedDown: boolean;
    /**
     * Maximum FRC season year for valid queries.
     */
    maxSeason: number;
}
