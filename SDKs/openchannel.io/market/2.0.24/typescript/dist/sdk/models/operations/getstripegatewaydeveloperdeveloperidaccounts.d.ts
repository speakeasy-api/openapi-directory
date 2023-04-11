import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetStripeGatewayDeveloperDeveloperIdAccountsRequest extends SpeakeasyBase {
    /**
     * The id of the developer connecting their Stripe account
     */
    developerId: string;
}
export declare class GetStripeGatewayDeveloperDeveloperIdAccountsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
