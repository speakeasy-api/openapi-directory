import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDataTransfer } from "./applicationdatatransfer";
/**
 * A Transfer resource represents the transfer of the ownership of user data between users.
 */
export declare class DataTransfer extends SpeakeasyBase {
    /**
     * The list of per-application data transfer resources. It contains details of the applications associated with this transfer resource, and also specifies the applications for which data transfer has to be done at the time of the transfer resource creation.
     */
    applicationDataTransfers?: ApplicationDataTransfer[];
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Read-only. The transfer's ID.
     */
    id?: string;
    /**
     * Identifies the resource as a DataTransfer request.
     */
    kind?: string;
    /**
     * ID of the user to whom the data is being transferred.
     */
    newOwnerUserId?: string;
    /**
     * ID of the user whose data is being transferred.
     */
    oldOwnerUserId?: string;
    /**
     * Read-only. Overall transfer status.
     */
    overallTransferStatusCode?: string;
    /**
     * Read-only. The time at which the data transfer was requested.
     */
    requestTime?: Date;
}
