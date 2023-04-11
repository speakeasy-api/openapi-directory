import { SpeakeasyBase } from "../../../internal/utils";
import { ThrottlingSettings } from "./throttlingsettings";
/**
 * New or updated webhook settings for an app.
 */
export declare class SettingsChangeRequest extends SpeakeasyBase {
    /**
     * A publicly available URL for Hubspot to call where event payloads will be delivered. See [link-so-some-doc](#) for details about the format of these event payloads.
     */
    targetUrl: string;
    /**
     * Configuration details for webhook throttling.
     */
    throttling: ThrottlingSettings;
}
