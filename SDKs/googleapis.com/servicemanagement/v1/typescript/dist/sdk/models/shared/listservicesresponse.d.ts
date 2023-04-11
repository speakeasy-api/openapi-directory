import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedService } from "./managedservice";
/**
 * Response message for `ListServices` method.
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * Token that can be passed to `ListServices` to resume a paginated query.
     */
    nextPageToken?: string;
    /**
     * The returned services will only have the name field set.
     */
    services?: ManagedService[];
}
