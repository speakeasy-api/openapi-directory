import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteStripeGatewayUserUserIdCardsCardIdRequest extends SpeakeasyBase {
    /**
     * The id of the credit card to remove
     */
    cardId: string;
    /**
     * The id of the user removing their credit card
     */
    userId: string;
}
export declare class DeleteStripeGatewayUserUserIdCardsCardIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
