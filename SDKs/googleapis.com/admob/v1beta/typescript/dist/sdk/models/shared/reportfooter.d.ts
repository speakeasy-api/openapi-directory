import { SpeakeasyBase } from "../../../internal/utils";
import { ReportWarning } from "./reportwarning";
/**
 * Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
 */
export declare class ReportFooter extends SpeakeasyBase {
    /**
     * Total number of rows that matched the request. Warning: This count does NOT always match the number of rows in the response. Do not make that assumption when processing the response.
     */
    matchingRowCount?: string;
    /**
     * Warnings associated with generation of the report.
     */
    warnings?: ReportWarning[];
}
