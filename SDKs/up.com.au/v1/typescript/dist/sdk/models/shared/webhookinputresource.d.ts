import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookInputResourceAttributes extends SpeakeasyBase {
    /**
     * An optional description for this webhook, up to 64 characters in
     *
     * @remarks
     * length.
     *
     */
    description?: string;
    /**
     * The URL that this webhook should post events to. This must be a valid
     *
     * @remarks
     * HTTP or HTTPS URL that does not exceed 300 characters in length.
     *
     */
    url: string;
}
/**
 * Represents a webhook specified as request input.
 *
 * @remarks
 *
 */
export declare class WebhookInputResource extends SpeakeasyBase {
    attributes: WebhookInputResourceAttributes;
}
