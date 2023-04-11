import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    /**
     * Whether token identities in the Service must be granted access to Sync objects by using the [Permissions](https://www.twilio.com/docs/sync/api/sync-permissions) resource.
     */
    aclEnabled?: boolean;
    /**
     * A string that you assign to describe the resource.
     */
    friendlyName?: string;
    /**
     * Whether every `endpoint_disconnected` event should occur after a configurable delay. The default is `false`, where the `endpoint_disconnected` event occurs immediately after disconnection. When `true`, intervening reconnections can prevent the `endpoint_disconnected` event.
     */
    reachabilityDebouncingEnabled?: boolean;
    /**
     * The reachability event delay in milliseconds if `reachability_debouncing_enabled` = `true`.  Must be between 1,000 and 30,000 and defaults to 5,000. This is the number of milliseconds after the last running client disconnects, and a Sync identity is declared offline, before the webhook is called if all endpoints remain offline. A reconnection from the same identity by any endpoint during this interval prevents the webhook from being called.
     */
    reachabilityDebouncingWindow?: number;
    /**
     * Whether the service instance should call `webhook_url` when client endpoints connect to Sync. The default is `false`.
     */
    reachabilityWebhooksEnabled?: boolean;
    /**
     * The URL we should call when Sync objects are manipulated.
     */
    webhookUrl?: string;
    /**
     * Whether the Service instance should call `webhook_url` when the REST API is used to update Sync objects. The default is `false`.
     */
    webhooksFromRestEnabled?: boolean;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateServiceUpdateServiceRequest;
    /**
     * The SID of the Service resource to update.
     */
    sid: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1Service?: shared.SyncV1Service;
}
