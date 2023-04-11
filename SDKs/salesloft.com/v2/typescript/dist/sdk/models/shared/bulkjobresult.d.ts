import { SpeakeasyBase } from "../../../internal/utils";
export declare class BulkJobResult extends SpeakeasyBase {
    /**
     * Error message for the record that was processed. Will be null if there was no error.
     */
    error?: string;
    /**
     * ID of the record that was processed
     */
    id?: number;
    /**
     * The data that was used to process the operation
     */
    record?: Record<string, any>;
    /**
     * The object containing the resulting resource from performing the bulk action on this record
     */
    resource?: Record<string, any>;
    /**
     * Status of the record that was processed. Will be one of: success, error
     */
    status?: string;
}
