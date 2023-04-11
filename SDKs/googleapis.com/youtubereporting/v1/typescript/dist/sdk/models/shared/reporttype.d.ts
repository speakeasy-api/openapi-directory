import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A report type.
 */
export declare class ReportType extends SpeakeasyBase {
    /**
     * The date/time when this report type was/will be deprecated.
     */
    deprecateTime?: string;
    /**
     * The ID of the report type (max. 100 characters).
     */
    id?: string;
    /**
     * The name of the report type (max. 100 characters).
     */
    name?: string;
    /**
     * True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method.
     */
    systemManaged?: boolean;
}
