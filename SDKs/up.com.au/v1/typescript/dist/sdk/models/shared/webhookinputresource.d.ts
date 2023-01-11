import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookInputResourceAttributes extends SpeakeasyBase {
    description?: string;
    url: string;
}
/**
 * Represents a webhook specified as request input.
 *
**/
export declare class WebhookInputResource extends SpeakeasyBase {
    attributes: WebhookInputResourceAttributes;
}
