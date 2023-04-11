import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSecondaryAuthTokenServerList: readonly ["https://accounts.twilio.com"];
export declare class CreateSecondaryAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    accountsV1SecondaryAuthToken?: shared.AccountsV1SecondaryAuthToken;
}
