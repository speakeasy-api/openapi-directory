import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { ReportStatus } from "./reportstatus";
/**
 * Report metadata.
 */
export declare class ReportMetadata extends SpeakeasyBase {
    /**
     * Output only. The path to the location in Google Cloud Storage where the report is stored.
     */
    googleCloudStoragePath?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    reportDataEndDate?: Date;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    reportDataStartDate?: Date;
    /**
     * Report status.
     */
    status?: ReportStatus;
}
