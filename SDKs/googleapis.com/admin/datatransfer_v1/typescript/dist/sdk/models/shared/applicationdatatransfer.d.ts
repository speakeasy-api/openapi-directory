import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationTransferParam } from "./applicationtransferparam";
/**
 * Template to map fields of ApplicationDataTransfer resource.
 */
export declare class ApplicationDataTransfer extends SpeakeasyBase {
    /**
     * The application's ID.
     */
    applicationId?: string;
    /**
     * The transfer parameters for the application. These parameters are used to select the data which will get transferred in context of this application. For more information about the specific values available for each application, see the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference.
     */
    applicationTransferParams?: ApplicationTransferParam[];
    /**
     * Read-only. Current status of transfer for this application.
     */
    applicationTransferStatus?: string;
}
