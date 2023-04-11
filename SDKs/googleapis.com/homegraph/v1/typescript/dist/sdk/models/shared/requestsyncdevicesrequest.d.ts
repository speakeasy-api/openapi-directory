import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.
 */
export declare class RequestSyncDevicesRequest extends SpeakeasyBase {
    /**
     * Required. Third-party user ID.
     */
    agentUserId?: string;
    /**
     * Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given `agent_user_id`, but the caller will not receive any error responses.
     */
    async?: boolean;
}
