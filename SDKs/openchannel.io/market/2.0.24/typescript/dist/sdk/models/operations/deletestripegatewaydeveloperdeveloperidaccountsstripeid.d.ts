import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest extends SpeakeasyBase {
    /**
     * The id of the developer disconnecting their Stripe account
     */
    developerId: string;
    /**
     * The id of the stripe account to disconnect
     */
    stripeId: string;
}
export declare class DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
