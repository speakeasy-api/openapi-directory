import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookTypeEnum } from "./webhooktypeenum";
/**
 * The webhook codes that can be fired by this test endpoint.
 */
export declare enum SandboxItemFireWebhookRequestWebhookCodeEnum {
    DefaultUpdate = "DEFAULT_UPDATE",
    NewAccountsAvailable = "NEW_ACCOUNTS_AVAILABLE",
    AuthDataUpdate = "AUTH_DATA_UPDATE",
    RecurringTransactionsUpdate = "RECURRING_TRANSACTIONS_UPDATE",
    SyncUpdatesAvailable = "SYNC_UPDATES_AVAILABLE"
}
/**
 * SandboxItemFireWebhookRequest defines the request schema for `/sandbox/item/fire_webhook`
 */
export declare class SandboxItemFireWebhookRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The webhook codes that can be fired by this test endpoint.
     */
    webhookCode: SandboxItemFireWebhookRequestWebhookCodeEnum;
    /**
     * The webhook types that can be fired by this test endpoint.
     */
    webhookType?: WebhookTypeEnum;
}
