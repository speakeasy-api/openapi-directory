import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { WebhookApiVersionEnum } from "./webhookapiversionenum";
export declare class WebhookInput extends SpeakeasyBase {
    /**
     * API version for the webhook
     */
    apiVersion?: WebhookApiVersionEnum;
    /**
     * Verify webhook URL HTTPS certificate
     */
    checkCert?: boolean;
    /**
     * Custom name for the resource
     */
    name?: string;
    /**
     * URL to post events to (must be https)
     */
    url: string;
}
/**
 * Webhooks
 */
export declare class Webhook extends SpeakeasyBase {
    /**
     * API version for the webhook
     */
    apiVersion?: WebhookApiVersionEnum;
    /**
     * Date time of the last change
     */
    changed?: Date;
    /**
     * User that last modified the object
     */
    changedBy?: ChangedBy;
    /**
     * Verify webhook URL HTTPS certificate
     */
    checkCert?: boolean;
    /**
     * Date time of the last change
     */
    created?: Date;
    /**
     * User that last modified the object
     */
    createdBy?: ChangedBy;
    /**
     * Object id.
     */
    id?: string;
    /**
     * Custom name for the resource
     */
    name?: string;
    /**
     * URL to post events to (must be https)
     */
    url: string;
}
