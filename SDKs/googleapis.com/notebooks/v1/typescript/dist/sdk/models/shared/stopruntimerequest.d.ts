import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for stopping a Managed Notebook Runtime.
 */
export declare class StopRuntimeRequest extends SpeakeasyBase {
    /**
     * Idempotent request UUID.
     */
    requestId?: string;
}
