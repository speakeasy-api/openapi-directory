import { SpeakeasyBase } from "../../../internal/utils";
import { ThrottlingSettings } from "./throttlingsettings";
/**
 * Webhook settings for an app.
 */
export declare class SettingsResponse extends SpeakeasyBase {
    /**
     * When this subscription was created. Formatted as milliseconds from the [Unix epoch](#).
     */
    createdAt: Date;
    /**
     * A publicly available URL for Hubspot to call where event payloads will be delivered. See [link-so-some-doc](#) for details about the format of these event payloads.
     */
    targetUrl: string;
    /**
     * Configuration details for webhook throttling.
     */
    throttling: ThrottlingSettings;
    /**
     * When this subscription was last updated. Formatted as milliseconds from the [Unix epoch](#).
     */
    updatedAt?: Date;
}
