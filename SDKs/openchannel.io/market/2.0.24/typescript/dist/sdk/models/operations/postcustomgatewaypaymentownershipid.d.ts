import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostCustomGatewayPaymentOwnershipIdRequest extends SpeakeasyBase {
    /**
     * The total amount paid in cents
     */
    amount: number;
    /**
     * A custom JSON object to attach to this transaction
     */
    customData?: string;
    /**
     * The date (in milliseconds) of when this payment was made
     */
    date?: number;
    /**
     * The amount (in cents) paid to the owner of the app. Defaults based on the commission amount configured for this marketplace.
     */
    developerAmount?: number;
    /**
     * The fee (in cents) paid to a payment processors or third parties to process this payment. Default is 0.
     */
    feeAmount?: number;
    /**
     * The amount (in cents) paid to the marketplace owner as a commission for the purchase of this app. Defaults based on the commission amount configured for this marketplace.
     */
    marketplaceAmount?: number;
    /**
     * The id of the ownership record involved in this transaction
     */
    ownershipId: string;
}
export declare class PostCustomGatewayPaymentOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
