import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostStripeGatewayDeveloperDeveloperIdAccountsRequest extends SpeakeasyBase {
    /**
     * The id of the developer connecting their Stripe account
     */
    developerId: string;
    /**
     * The URL to redirect this developer after they have connected their Stripe account
     */
    redirectUrl: string;
}
export declare class PostStripeGatewayDeveloperDeveloperIdAccountsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
