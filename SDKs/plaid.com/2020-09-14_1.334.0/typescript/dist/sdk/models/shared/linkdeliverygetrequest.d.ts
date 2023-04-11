import { SpeakeasyBase } from "../../../internal/utils";
/**
 * LinkDeliveryGetRequest defines the request schema for `/link_delivery/get`
 */
export declare class LinkDeliveryGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The ID for the Link Delivery session from a previous invocation of `/link_delivery/create`.
     */
    linkDeliverySessionId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
