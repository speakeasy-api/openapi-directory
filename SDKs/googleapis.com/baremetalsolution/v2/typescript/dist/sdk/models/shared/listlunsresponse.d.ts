import { SpeakeasyBase } from "../../../internal/utils";
import { Lun } from "./lun";
/**
 * Response message containing the list of storage volume luns.
 */
export declare class ListLunsResponse extends SpeakeasyBase {
    /**
     * The list of luns.
     */
    luns?: Lun[];
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
