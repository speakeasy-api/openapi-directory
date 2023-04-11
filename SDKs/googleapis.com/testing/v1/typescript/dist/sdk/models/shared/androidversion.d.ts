import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { Distribution } from "./distribution";
/**
 * A version of the Android OS.
 */
export declare class AndroidVersion extends SpeakeasyBase {
    /**
     * The API level for this Android version. Examples: 18, 19.
     */
    apiLevel?: number;
    /**
     * The code name for this Android version. Examples: "JellyBean", "KitKat".
     */
    codeName?: string;
    /**
     * Data about the relative number of devices running a given configuration of the Android platform.
     */
    distribution?: Distribution;
    /**
     * An opaque id for this Android version. Use this id to invoke the TestExecutionService.
     */
    id?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    releaseDate?: Date;
    /**
     * Tags for this dimension. Examples: "default", "preview", "deprecated".
     */
    tags?: string[];
    /**
     * A string representing this version of the Android OS. Examples: "4.3", "4.4".
     */
    versionString?: string;
}
