import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.
 */
export declare class SyncRequest extends SpeakeasyBase {
    /**
     * Required. Third-party user ID.
     */
    agentUserId?: string;
    /**
     * Request ID used for debugging.
     */
    requestId?: string;
}
