import { SpeakeasyBase } from "../../../internal/utils";
import { LinkDeliveryCommunicationMethod } from "./linkdeliverycommunicationmethod";
/**
 * LinkDeliveryCreateRequest defines the request schema for `/link_delivery/create`
 */
export declare class LinkDeliveryCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The list of communication methods to send the Link Delivery URL to.
     */
    communicationMethods: LinkDeliveryCommunicationMethod[];
    /**
     * A `link_token` from a previous invocation of `/link/token/create` with Link Delivery enabled.
     */
    linkToken: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
