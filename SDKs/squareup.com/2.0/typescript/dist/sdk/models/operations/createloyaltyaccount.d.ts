import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLoyaltyAccountSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateLoyaltyAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLoyaltyAccountResponse?: shared.CreateLoyaltyAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
