import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
/**
 * Template for a collection of Applications.
 */
export declare class ApplicationsListResponse extends SpeakeasyBase {
    /**
     * The list of applications that support data transfer and are also installed for the customer.
     */
    applications?: Application[];
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Identifies the resource as a collection of Applications.
     */
    kind?: string;
    /**
     * Token to specify the next page in the list.
     */
    nextPageToken?: string;
}
