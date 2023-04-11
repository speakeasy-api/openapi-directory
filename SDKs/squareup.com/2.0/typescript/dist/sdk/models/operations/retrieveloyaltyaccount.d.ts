import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveLoyaltyAccountSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveLoyaltyAccountRequest extends SpeakeasyBase {
    /**
     * The ID of the [loyalty account](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyAccount) to retrieve.
     */
    accountId: string;
}
export declare class RetrieveLoyaltyAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveLoyaltyAccountResponse?: shared.RetrieveLoyaltyAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
