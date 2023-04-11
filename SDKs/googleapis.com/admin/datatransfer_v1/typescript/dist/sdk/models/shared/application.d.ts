import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationTransferParam } from "./applicationtransferparam";
/**
 * Application resources represent applications installed on the domain that support transferring ownership of user data.
 */
export declare class Application extends SpeakeasyBase {
    /**
     * Etag of the resource.
     */
    etag?: string;
    /**
     * The application's ID. Retrievable by using the [`applications.list()`](/admin-sdk/data-transfer/reference/rest/v1/applications/list) method.
     */
    id?: string;
    /**
     * Identifies the resource as a DataTransfer Application Resource.
     */
    kind?: string;
    /**
     * The application's name.
     */
    name?: string;
    /**
     * The list of all possible transfer parameters for this application. These parameters select which categories of the user's data to transfer.
     */
    transferParams?: ApplicationTransferParam[];
}
