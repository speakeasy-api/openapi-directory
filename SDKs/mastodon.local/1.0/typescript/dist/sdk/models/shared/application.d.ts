import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an application that interfaces with the REST API to access accounts or post statuses.
 *
 * @see {@link https://docs.joinmastodon.org/entities/application/}
 */
export declare class Application extends SpeakeasyBase {
    /**
     * Client ID key, to be used for obtaining OAuth tokens
     */
    clientId?: string;
    /**
     * Client secret key, to be used for obtaining OAuth tokens
     */
    clientSecret?: string;
    /**
     * The name of your application.
     */
    name: string;
    /**
     * Used for Push Streaming API. Returned with [POST /api/v1/apps](https://docs.joinmastodon.org/methods/apps/#create-an-application). Equivalent to [PushSubscription#server_key](https://docs.joinmastodon.org/entities/pushsubscription/#server_key)
     */
    vapidKey?: string;
    /**
     * The website associated with your application. Must be URL.
     */
    website?: string;
}
