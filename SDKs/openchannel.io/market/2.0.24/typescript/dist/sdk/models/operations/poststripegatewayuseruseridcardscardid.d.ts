import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostStripeGatewayUserUserIdCardsCardIdRequest extends SpeakeasyBase {
    /**
     * The card holder's city
     */
    addressCity?: string;
    /**
     * The card holder's country
     */
    addressCountry?: string;
    /**
     * The card holder's street address
     */
    addressLine1?: string;
    /**
     * The card holder's street address
     */
    addressLine2?: string;
    /**
     * The card holder's city state/province
     */
    addressState?: string;
    /**
     * The card holder's zip/postal code
     */
    addressZip?: string;
    /**
     * The id of the card to be updated
     */
    cardId: string;
    /**
     * Set to true if this should be set to be the default credit card
     */
    isDefault?: boolean;
    /**
     * The id of the user adding their credit card
     */
    userId: string;
}
export declare class PostStripeGatewayUserUserIdCardsCardIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
