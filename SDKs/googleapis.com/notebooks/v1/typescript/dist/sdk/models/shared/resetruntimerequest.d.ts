import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for resetting a Managed Notebook Runtime.
 */
export declare class ResetRuntimeRequest extends SpeakeasyBase {
    /**
     * Idempotent request UUID.
     */
    requestId?: string;
}
