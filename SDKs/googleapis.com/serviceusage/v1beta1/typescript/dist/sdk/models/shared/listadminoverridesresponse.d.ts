import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaOverride } from "./quotaoverride";
/**
 * Response message for ListAdminOverrides.
 */
export declare class ListAdminOverridesResponse extends SpeakeasyBase {
    /**
     * Token identifying which result to start with; returned by a previous list call.
     */
    nextPageToken?: string;
    /**
     * Admin overrides on this limit.
     */
    overrides?: QuotaOverride[];
}
