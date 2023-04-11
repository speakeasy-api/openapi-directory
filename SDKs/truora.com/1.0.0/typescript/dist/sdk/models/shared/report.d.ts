import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents reports
 */
export declare class Report extends SpeakeasyBase {
    /**
     * name of the user who created the report
     */
    createdBy?: string;
    /**
     * Amount of created checks. Returned only when a file is uploaded
     */
    createdChecksCount?: number;
    /**
     * Report creation date
     */
    creationDate: Date;
    /**
     * Indicates whether the report has an associated file
     */
    hasData?: boolean;
    /**
     * Report ID
     */
    id: string;
    /**
     * number of invalid rows in the uploaded file. Returned only when a file is uploaded
     */
    invalidChecksCount?: number;
    /**
     * Report name
     */
    name: string;
    /**
     * Uploaded file row count. Returned only when a file is uploaded
     */
    size?: number;
    /**
     * Latest modification date of the report
     */
    updateDate: Date;
}
