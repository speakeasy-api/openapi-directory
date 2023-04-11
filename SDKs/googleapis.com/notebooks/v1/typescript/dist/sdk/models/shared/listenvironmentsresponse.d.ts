import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
/**
 * Response for listing environments.
 */
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    /**
     * A list of returned environments.
     */
    environments?: Environment[];
    /**
     * A page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
