import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetStripeGatewayUserUserIdCardsRequest extends SpeakeasyBase {
    /**
     * The id of the user requesting their credit cards
     */
    userId: string;
}
export declare class GetStripeGatewayUserUserIdCardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
