import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata returned for an upload operation.
 */
export declare class Upload extends SpeakeasyBase {
    /**
     * Account Id to which this upload belongs.
     */
    accountId?: string;
    /**
     * Custom data source Id to which this data import belongs.
     */
    customDataSourceId?: string;
    /**
     * Data import errors collection.
     */
    errors?: string[];
    /**
     * A unique ID for this upload.
     */
    id?: string;
    /**
     * Resource type for Analytics upload.
     */
    kind?: string;
    /**
     * Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED.
     */
    status?: string;
    /**
     * Time this file is uploaded.
     */
    uploadTime?: Date;
}
