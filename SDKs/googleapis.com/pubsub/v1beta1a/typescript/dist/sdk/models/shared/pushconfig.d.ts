import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a push delivery endpoint.
 */
export declare class PushConfig extends SpeakeasyBase {
    /**
     * A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".
     */
    pushEndpoint?: string;
}
