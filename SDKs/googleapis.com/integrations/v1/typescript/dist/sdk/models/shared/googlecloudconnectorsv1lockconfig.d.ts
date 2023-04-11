import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines whether or no a connection is locked. If locked, a reason must be specified.
 */
export declare class GoogleCloudConnectorsV1LockConfig extends SpeakeasyBase {
    /**
     * Indicates whether or not the connection is locked.
     */
    locked?: boolean;
    /**
     * Describes why a connection is locked.
     */
    reason?: string;
}
