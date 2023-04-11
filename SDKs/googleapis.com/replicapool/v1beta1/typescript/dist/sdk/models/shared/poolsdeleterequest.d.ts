import { SpeakeasyBase } from "../../../internal/utils";
export declare class PoolsDeleteRequest extends SpeakeasyBase {
    /**
     * If there are instances you would like to keep, you can specify them here. These instances won't be deleted, but the associated replica objects will be removed.
     */
    abandonInstances?: string[];
}
