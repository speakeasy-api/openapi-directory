import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Site } from "./site";
/**
 * Represents a `ListSites` response. The response can include either `sites` or `errors`.
 */
export declare class ListSitesResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The sites that belong to the seller.
     */
    sites?: Site[];
}
