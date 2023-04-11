import { SpeakeasyBase } from "../../../internal/utils";
import { GtagConfig } from "./gtagconfig";
/**
 * Successful response
 */
export declare class ListGtagConfigResponse extends SpeakeasyBase {
    /**
     * All Google tag configs in a Container.
     */
    gtagConfig?: GtagConfig[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
