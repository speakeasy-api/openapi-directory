import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostStripeGatewayUserUserIdCardsRequest extends SpeakeasyBase {
    /**
     * Set to true if this should be set to be the default credit card
     */
    isDefault?: boolean;
    /**
     * The Stripe token returned by the Stripe.js Stripe.card.createToken call
     */
    token: string;
    /**
     * The id of the user adding their credit card
     */
    userId: string;
}
export declare class PostStripeGatewayUserUserIdCardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
