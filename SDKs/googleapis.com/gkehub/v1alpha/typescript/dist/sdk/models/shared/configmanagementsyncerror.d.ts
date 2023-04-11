import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementErrorResource } from "./configmanagementerrorresource";
/**
 * An ACM created error representing a problem syncing configurations
 */
export declare class ConfigManagementSyncError extends SpeakeasyBase {
    /**
     * An ACM defined error code
     */
    code?: string;
    /**
     * A description of the error
     */
    errorMessage?: string;
    /**
     * A list of config(s) associated with the error, if any
     */
    errorResources?: ConfigManagementErrorResource[];
}
