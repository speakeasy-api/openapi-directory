import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiServiceusageV1Service } from "./googleapiserviceusagev1service";
/**
 * Response message for the `ListServices` method.
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * Token that can be passed to `ListServices` to resume a paginated query.
     */
    nextPageToken?: string;
    /**
     * The available services for the requested project.
     */
    services?: GoogleApiServiceusageV1Service[];
}
