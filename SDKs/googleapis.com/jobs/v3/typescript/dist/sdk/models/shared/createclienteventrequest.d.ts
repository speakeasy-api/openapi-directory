import { SpeakeasyBase } from "../../../internal/utils";
import { ClientEvent } from "./clientevent";
/**
 * The report event request.
 */
export declare class CreateClientEventRequest extends SpeakeasyBase {
    /**
     * An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of search and recommendation for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client.
     */
    clientEvent?: ClientEvent;
}
