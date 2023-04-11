import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostCustomGatewayRefundOwnershipIdRequest extends SpeakeasyBase {
    /**
     * The total amount refunded in cents
     */
    amount: number;
    /**
     * A custom JSON object to attach to this transaction
     */
    customData?: string;
    /**
     * The date (in milliseconds) of when this refund was made
     */
    date?: number;
    /**
     * The amount (in cents) recovered from the owner of the app
     */
    developerAmount?: number;
    /**
     * The fee (in cents) recovered from a payment processor or third party to process this payment. The default value is 0
     */
    feeAmount?: number;
    /**
     * The amount (in cents) recovered from the marketplace owner as a commission refund for the purchase of this app
     */
    marketplaceAmount?: number;
    /**
     * The id of the ownership record involved in this transaction
     */
    ownershipId: string;
}
export declare class PostCustomGatewayRefundOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
