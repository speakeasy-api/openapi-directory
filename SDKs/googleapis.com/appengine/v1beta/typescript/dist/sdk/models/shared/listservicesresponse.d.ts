import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * Response message for Services.ListServices.
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * The services belonging to the requested application.
     */
    services?: Service[];
}
