import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaOverride } from "./quotaoverride";
/**
 * Response message for ListConsumerOverrides.
 */
export declare class ListConsumerOverridesResponse extends SpeakeasyBase {
    /**
     * Token identifying which result to start with; returned by a previous list call.
     */
    nextPageToken?: string;
    /**
     * Consumer overrides on this limit.
     */
    overrides?: QuotaOverride[];
}
