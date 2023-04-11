import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { Header } from "./header";
import { Row } from "./row";
/**
 * Result of a generated report.
 */
export declare class ReportResult extends SpeakeasyBase {
    /**
     * Row representation.
     */
    averages?: Row;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    endDate?: Date;
    /**
     * The header information; one for each dimension in the request, followed by one for each metric in the request.
     */
    headers?: Header[];
    /**
     * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request.
     */
    rows?: Row[];
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    startDate?: Date;
    /**
     * The total number of rows matched by the report request.
     */
    totalMatchedRows?: string;
    /**
     * Row representation.
     */
    totals?: Row;
    /**
     * Any warnings associated with generation of the report. These warnings are always returned in English.
     */
    warnings?: string[];
}
