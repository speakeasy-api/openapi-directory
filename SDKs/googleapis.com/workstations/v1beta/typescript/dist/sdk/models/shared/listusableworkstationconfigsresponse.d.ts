import { SpeakeasyBase } from "../../../internal/utils";
import { WorkstationConfig } from "./workstationconfig";
/**
 * Response message for ListUsableWorkstationConfigs.
 */
export declare class ListUsableWorkstationConfigsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Unreachable resources.
     */
    unreachable?: string[];
    /**
     * The requested configs.
     */
    workstationConfigs?: WorkstationConfig[];
}
