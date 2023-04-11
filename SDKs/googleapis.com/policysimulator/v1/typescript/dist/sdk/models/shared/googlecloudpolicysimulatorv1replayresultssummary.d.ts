import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
/**
 * Summary statistics about the replayed log entries.
 */
export declare class GoogleCloudPolicysimulatorV1ReplayResultsSummary extends SpeakeasyBase {
    /**
     * The number of replayed log entries with a difference between baseline and simulated policies.
     */
    differenceCount?: number;
    /**
     * The number of log entries that could not be replayed.
     */
    errorCount?: number;
    /**
     * The total number of log entries replayed.
     */
    logCount?: number;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    newestDate?: GoogleTypeDate;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    oldestDate?: GoogleTypeDate;
    /**
     * The number of replayed log entries with no difference between baseline and simulated policies.
     */
    unchangedCount?: number;
}
