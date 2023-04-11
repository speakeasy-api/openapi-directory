import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
/**
 * Response message containing the list of storage volumes.
 */
export declare class ListVolumesResponse extends SpeakeasyBase {
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
    /**
     * The list of storage volumes.
     */
    volumes?: Volume[];
}
