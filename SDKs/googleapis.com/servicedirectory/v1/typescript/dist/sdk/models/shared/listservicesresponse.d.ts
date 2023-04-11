import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * The response message for RegistrationService.ListServices.
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of services.
     */
    services?: Service[];
}
