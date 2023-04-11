import { SpeakeasyBase } from "../../../internal/utils";
import { Workstation } from "./workstation";
/**
 * Response message for ListUsableWorkstations.
 */
export declare class ListUsableWorkstationsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Unreachable resources.
     */
    unreachable?: string[];
    /**
     * The requested workstations.
     */
    workstations?: Workstation[];
}
