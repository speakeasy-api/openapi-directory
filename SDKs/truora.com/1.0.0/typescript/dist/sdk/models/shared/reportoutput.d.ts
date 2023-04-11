import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Reprents the report creation result
 */
export declare class ReportOutput extends SpeakeasyBase {
    /**
     * Path to background check list
     */
    checks: string;
    /**
     * Represents reports
     */
    report: Report;
    /**
     * Path to this resource
     */
    self?: string;
}
