import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookInputResource } from "./webhookinputresource";
/**
 * Request to create a new webhook. This currently only requires a `url`
 *
 * @remarks
 * attribute.
 *
 */
export declare class CreateWebhookRequest extends SpeakeasyBase {
    /**
     * The webhook resource to create.
     *
     * @remarks
     *
     */
    data: WebhookInputResource;
}
